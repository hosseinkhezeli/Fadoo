import { Container } from "@/components/Container";
import { LogoInSun } from "./components/LogoInSun";
import { Portrait } from "./components/Portrait";
export function MainPage() {
  return (
    <Container id={"home"}>
      <div className="grid grid-cols-2 grid-rows-2 w-full max-w-[1024px]">
        <div className="col-span-2 flex flex-row">
          <LogoInSun />
        </div>
        <div className="col-span-2 flex flex-row-reverse">
          <Portrait />
        </div>
      </div>
    </Container>
  );
}
