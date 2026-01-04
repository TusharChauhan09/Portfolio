export default function SpotifyIframe() {
  return (
      <div className="flex justify-center ">
        <iframe
          className="min-w-full md:min-w-1/2"
          data-testid="embed-iframe"
          style={{ borderRadius: "12px", border: "none" }}
          src="https://open.spotify.com/embed/playlist/2Cq0YYP5Ou6ZPqWTwXDvzM?utm_source=generator"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
  );
}
