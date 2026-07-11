type PodcastCardShapeProps = {
  desktopPath: string;
  desktopSvgClass?: string;
  tabletPath: string;
  tabletSvgClass?: string;
  mobilePath: string;
  mobileSvgClass?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function PodcastCardShape({
  desktopPath,
  desktopSvgClass = "",
  tabletPath,
  tabletSvgClass = "",
  mobilePath,
  mobileSvgClass = "",
  children,
  className = "",
  contentClassName = ""
}: PodcastCardShapeProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>

      <svg
        className={`md:hidden absolute inset-0 w-full h-full ${mobileSvgClass}`}
        viewBox="0 0 602 320"
        preserveAspectRatio="none"
      >
        <path
          d={mobilePath}
          fill="#7208D5"
          fillOpacity="0.5"
          stroke="#37115A"
        />
      </svg>

      <svg
        className={`hidden md:block lg:hidden absolute inset-0 w-full h-full ${tabletSvgClass}`}
        viewBox="0 0 602 320"
        preserveAspectRatio="none"
      >
        <path
          d={tabletPath}
          fill="#7208D5"
          fillOpacity="0.5"
          stroke="#37115A"
        />
      </svg>

      <svg
        className={`hidden lg:block absolute inset-0 w-full h-full ${desktopSvgClass}`}
        viewBox="0 0 602 320"
        preserveAspectRatio="none"
      >
        <path
          d={desktopPath}
          fill="#7208D5"
          fillOpacity="0.5"
          stroke="#37115A"
        />
      </svg>

      <div className={`relative z-10 flex h-full w-full ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}

