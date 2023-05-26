import { FunctionComponent } from "react";
import Head from "next/head";
import HomeHero from "../components/starter/home_hero";
import Wrapper from "../components/starter/wrapper";
import HomeTemplates from "../components/starter/home_templates";
import HomeWhy from "../components/starter/home_why";
import QrCode from "../components/QrCode";
import {
  EuiAspectRatio,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlexGrid,
  EuiAvatar,
  EuiImage,
} from "@elastic/eui";

const Index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Wrapper>
        <EuiTitle size="l">
          <h1>Home</h1>
        </EuiTitle>
        <EuiSpacer size="xxl" />
        <EuiText>
          <p>
            Esto es un proyecto para crear una tarjeta de presentacion
            personalizada
          </p>
        </EuiText>
        <EuiSpacer size="xxl" />
        <EuiAspectRatio
          width={16}
          height={9}
          maxWidth={500}
          css={{ backgroundColor: "grey", borderRadius: "20px" }}
        >
          <EuiFlexGroup responsive={false} gutterSize="xl">
            <EuiFlexItem grow={4}>
              <img
                alt="Many small white-spotted pink jellyfish floating in a dark aquarium"
                src="https://tekofx.github.io/web/img/avatar.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  margin: "5%",
                }}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={6}>
              <EuiFlexGroup
                direction="column"
                gutterSize="m"
                responsive={false}
              >
                <EuiFlexItem grow={false} css={{ marginLeft: 0 }}>
                  <EuiTitle size="l">
                    <h1>Teko</h1>
                  </EuiTitle>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiTitle size="s">
                    <h2>Species</h2>
                  </EuiTitle>
                  <EuiText>
                    <p>Arctic Fox</p>
                  </EuiText>
                </EuiFlexItem>
                {/* Pronouns/Birthday */}
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup responsive={false}>
                    <EuiFlexItem grow={false}>
                      <EuiTitle size="s">
                        <h2>Pronouns</h2>
                      </EuiTitle>
                      <EuiText>
                        <p>They/Them</p>
                      </EuiText>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiTitle size="s">
                        <h2>Birthday</h2>
                      </EuiTitle>
                      <EuiText>
                        <p>April 1</p>
                      </EuiText>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
                {/* Website*/}
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup responsive={false}>
                    <EuiFlexItem grow={false}>
                      <EuiTitle size="s">
                        <h2>Website</h2>
                      </EuiTitle>
                      <EuiText>
                        <p>tekofx.github.io</p>
                      </EuiText>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <QrCode />
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiAspectRatio>
      </Wrapper>
    </>
  );
};

export default Index;
