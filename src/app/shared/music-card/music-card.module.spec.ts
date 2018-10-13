import { MusicCardModule } from './music-card.module';

describe('MusicCardModule', () => {
  let musicCardModule: MusicCardModule;

  beforeEach(() => {
    musicCardModule = new MusicCardModule();
  });

  it('should create an instance', () => {
    expect(musicCardModule).toBeTruthy();
  });
});
