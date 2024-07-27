import { Separator } from "shared/components/ui/separator";
import CopyrightFooter from "./CopyrightFooter";
import MiddleFooter from "./MiddleFooter";

export default function Footer() {
  return (
    <div className="container">
      <MiddleFooter />
      <Separator />
      <CopyrightFooter />
    </div>
  );
}
