export const LogoIcon = ({ width = 48, height = 48 }: { width?: number; height?: number }) => (
  <img src={`${import.meta.env.BASE_URL}apple-touch-icon.png`} alt="Compound Interest Calculator" width={width} height={height} style={{ borderRadius: width === 48 ? 12 : 6, display: 'block' }} />
);
