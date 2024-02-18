import BuilderDevTools from '@builder.io/dev-tools/next';

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  images: {
    remotePatterns: [toRemotePattern('https://daisyui.com/images/**')]
  }
});

function toRemotePattern(urlString) {
  const url = new URL(urlString);

  return {
    protocol: url.protocol.replace(':', ''),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname
  };
}

export default nextConfig;
