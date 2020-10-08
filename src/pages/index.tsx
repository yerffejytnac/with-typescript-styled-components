import { Layout } from "@components";
import styled from "styled-components";

const Root = styled.main`
  min-height: 100vh;
  padding: ${(props) => props.theme.space[3]}px;
  font-size: ${(props) => props.theme.fontSizes[4]}px;
  font-weight: ${(props) => props.theme.fontWeights[1]};
  letter-spacing: -0.02em;
`;

const IndexPage = () => (
  <Layout>
    <Root>
      <h1>Application</h1>
    </Root>
  </Layout>
);

export default IndexPage;
