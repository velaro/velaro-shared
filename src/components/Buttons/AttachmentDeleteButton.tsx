import React from 'react';

interface RemoveButtonProps {
  fileName: string;
  onRemove: () => void;
  className?: string;
  children: React.ReactNode;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  fileName,
  onRemove,
  className = '',
  children
}) => {
  return (
    <button
      title={`Remove ${fileName}`}
      onClick={onRemove}
      className={className}
    >
      {children}
    </button>
  );
};

export default RemoveButton;
