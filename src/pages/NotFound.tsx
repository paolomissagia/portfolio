import { PageMeta } from '../components/page-meta'

export function NotFound() {
  return (
    <section className="hero" aria-labelledby="title">
      <PageMeta
        title="Page not found · Paolo Missagia"
        description="This page doesn’t exist, or it has moved."
        path="/404"
        noindex
      />
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
