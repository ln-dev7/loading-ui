import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Classic } from "@/registry/components/loading-ui/classic";

export default function ClassicInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Workspace name" disabled />
        <InputGroupAddon align="inline-end">
          <Classic className="size-4 text-muted-foreground" />
          Validating...
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Write a reply..." disabled />
        <InputGroupAddon align="block-end">
          <Classic className="size-4 text-muted-foreground" />
          Generating suggestions...
          <InputGroupButton className="ml-auto" variant="default">
            Send
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
