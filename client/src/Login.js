import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=889c3623b35c4fdb89d884dfbca8afba&response_type=code&redirect_uri=https://spotify-clone-server-1.herokuapp.com/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "black",
      }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login with Spotify
      </a>
    </Container>
  );
}
