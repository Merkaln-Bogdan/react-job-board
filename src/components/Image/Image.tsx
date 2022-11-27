type ImageProps = {
  source: string;
  alt: string;
  //   isAutoWidth?: boolean;
  className?: string;
};

const defaultProps: Partial<ImageProps> = {
  className: undefined,
};

export function Image(props: ImageProps): React.ReactElement {
  const { source, alt, className } = { ...defaultProps, ...props };

  return (
    <div className={className}>
      <img
        // srcSet={source}
        src={source}
        alt={alt}
      />
    </div>
  );
}
