import React from "react";
import "./styles.css";
import styled from "styled-components";
import Uploady from "@rpldy/uploady";
import { getMockSenderEnhancer } from "@rpldy/mock-sender";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";

const mockSenderEnhancer = getMockSenderEnhancer();

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 5px;
    max-width: 200px;
    height: auto;
    margin-right: 10px;
  }
`;

export default function App() {
  return (
    <Uploady
      destination={{ url: "[upload-url]" }}
      enhancer={mockSenderEnhancer}
    >
      <div className="App">
        <h1>Hello React Uploady</h1>
        <UploadButton>Upload Files</UploadButton>

        <PreviewContainer>
          <UploadPreview />
        </PreviewContainer>
      </div>
    </Uploady>
  );
}
