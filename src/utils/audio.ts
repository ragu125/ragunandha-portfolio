// Procedural Web Audio API Ambient Ocean Generator
// Completely royalty-free, original, zero external network dependency

class OceanAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private lfoGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    try {
      // 1. Create Pink Noise buffer (5 seconds looping)
      const bufferSize = this.ctx.sampleRate * 5;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
        b6 = white * 0.115926;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // 2. Lowpass filter to simulate deep ocean water
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);
      filter.Q.setValueAtTime(3, this.ctx.currentTime);

      // 3. LFO to modulate filter frequency simulating waves rising & receding
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime); // ~5.5s wave cycle

      const lfoFilterGain = this.ctx.createGain();
      lfoFilterGain.gain.setValueAtTime(260, this.ctx.currentTime);
      lfo.connect(lfoFilterGain);
      lfoFilterGain.connect(filter.frequency);

      // 4. Amplitude modulation for wave crests
      const waveGain = this.ctx.createGain();
      waveGain.gain.setValueAtTime(0.4, this.ctx.currentTime);

      this.lfoGain = this.ctx.createGain();
      this.lfoGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      lfo.connect(this.lfoGain);
      this.lfoGain.connect(waveGain.gain);

      // 5. Master Gain with smooth fade in
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.5, this.ctx.currentTime + 1.5);

      // Connect graph
      this.noiseNode.connect(filter);
      filter.connect(waveGain);
      waveGain.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      lfo.start();
      this.noiseNode.start();
      this.isPlaying = true;
    } catch (e) {
      console.warn('Audio playback not permitted yet or failed:', e);
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.masterGain || !this.ctx) {
      this.isPlaying = false;
      return;
    }

    try {
      this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);
      setTimeout(() => {
        if (this.noiseNode) {
          try {
            this.noiseNode.stop();
            this.noiseNode.disconnect();
          } catch {
            // ignore
          }
          this.noiseNode = null;
        }
        this.isPlaying = false;
      }, 850);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const oceanAudio = new OceanAudioEngine();

