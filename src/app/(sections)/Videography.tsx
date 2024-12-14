import { Container } from "@/components/Container";
import { MountainsBG } from "./components/MountainsBG";
import { VideoPlaylist } from "./components/video-playlist/VideoPlaylist";

export function Videography() {
  return (
    <Container id={"videography"}>
      <div className="container  flex w-3/4  max-w-6xl z-20">
        <div className="basis-7/12">
          <video
            src="https://www.aparat.com/v/l5914l0"
            className="w-full h-full"
          />
        </div>

        <div className=" basis-6/12">
          <VideoPlaylist />
        </div>
      </div>
      <MountainsBG />
    </Container>
  );
}
