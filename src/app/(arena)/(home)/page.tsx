import Introduction from "@/components/Home/Introduction";
import DevVsDsa from "@/components/Home/DevVsDsa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Introduction name={"Enlight"} />
      <DevVsDsa />
    </div>
  );
}
