import React from 'react';
import { Link } from 'gatsby';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

export default function NotFound() {
  return (
    <Layout title="Page not found!">
      <p>You just found a page that doesn't exist (yet). If you feel that this is an error please open an issue with our GitHub repo.</p>
      <p>
        If you'd like to go back to homepage, <Link to="/">click here</Link>
        .
      </p>
    </Layout>
  );
}
