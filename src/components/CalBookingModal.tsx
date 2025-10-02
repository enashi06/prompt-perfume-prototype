import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calLink: string;
  title: string;
}

const CalBookingModal = ({ isOpen, onClose, calLink, title }: CalBookingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[600px] p-0">
        <DialogHeader className="bg-gradient-gold p-6">
          <DialogTitle className="font-display text-2xl text-primary-foreground">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="h-full overflow-hidden">
          <iframe
            src={calLink}
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-b-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalBookingModal;
