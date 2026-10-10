export function NotFound() {
  return (
    <section className="hero" aria-labelledby="title">
      <div className="row">
        <p className="note">
          404
          <br />
          no such page
        </p>
        <div className="hero-body">
          <h1 id="title">
            Page <em>not found</em>
          </h1>
          <p className="hero-line">This page doesn’t exist, or it has moved.</p>
          <p>
            <a href="/">Back to the home page</a>
          </p>
        </div>
      </div>
    </section>
  )
}
