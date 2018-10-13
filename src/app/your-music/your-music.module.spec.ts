import { YourMusicModule } from './your-music.module';

describe('YourMusicModule', () => {
  let yourMusicModule: YourMusicModule;

  beforeEach(() => {
    yourMusicModule = new YourMusicModule();
  });

  it('should create an instance', () => {
    expect(yourMusicModule).toBeTruthy();
  });
});
