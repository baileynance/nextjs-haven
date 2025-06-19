type Props = {
    isOpen: boolean;
    onCloseAction: () => void;
  };
  
  export default function SimpleDialog({ isOpen, onCloseAction }: Props) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-lg font-bold mb-4">Simple Dialog</h2>
          <button onClick={onCloseAction} className="text-sm text-blue-600">Close</button>
        </div>
      </div>
    );
  }
  