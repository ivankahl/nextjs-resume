import Button from "../atoms/Button";

const Actions = () => {
  return (
    <div className="flex w-full justify-center gap-4 print:hidden">
      <Button onClick={() => window.open("/Ivan Kahl's Resume.pdf", "_blank")}>
        Download
      </Button>
      <Button onClick={() => window.print()}>Print</Button>
    </div>
  );
};

export default Actions;
