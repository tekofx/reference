import { FunctionComponent, useState } from "react";
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
  EuiPanel,
  EuiDescriptionList,
  EuiBadge,
  EuiToolTip,
  EuiGlobalToastList,
} from "@elastic/eui";
import { Toast } from "@elastic/eui/src/components/toast/global_toast_list";
const favoriteVideoGames = [
  {
    title: "Species",
    description: "Arctic Fox (Vulpes lagopus)",
  },
  {
    title: "Birtday",
    description: "January 1st, 2019",
  },
  {
    title: "Gender",
    description: "Male",
  },
  {
    title: "Personality",
    description: "Shy",
  },
  {
    title: "Height",
    description: "1.80m",
  },
];

const toast: Toast = {
  id: "1",
  title: "Color copiado",
  text: "Se ha copiado el codigo HEX del color",
  iconType: "logoElastic",
  color: "primary",
};

const colors = [
  { name: "Pelaje 1", hex: "#2D2D2D" },
  { name: "Pelaje 2", hex: "#A0A0A0" },
  { name: "Pelaje 3", hex: "#F7F7F7" },
  { name: "Pelo 1", hex: "#2C7DE6" },
  { name: "Pelo 2", hex: "#00DBFF" },
];
const Index: FunctionComponent = () => {
  let removeToast, addToasts;
  const [toasts, setToasts] = useState([]);

  removeToast = () => {
    setToasts([]);
  };
  addToasts = () => setToasts([toast]);
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
        {/* Information */}
        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiImage
                size="l"
                hasShadow
                alt="Large image"
                src="https://tekofx.github.io/web/img/avatar.jpg"
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiTitle size="l">
                <h3>Teko</h3>
              </EuiTitle>
              <EuiSpacer size="xxl" />
              <EuiDescriptionList
                type="column"
                listItems={favoriteVideoGames}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
        <EuiSpacer size="xxl" />
        {/* Colores */}
        <EuiPanel>
          <EuiTitle size="l">
            <h3>Colores</h3>
          </EuiTitle>
          <EuiSpacer size="l" />
          <EuiFlexGroup wrap responsive={false} gutterSize="xs">
            {colors.map((color) => (
              <EuiFlexItem grow={true} key={color.name}>
                <EuiToolTip position="top" content={color.hex}>
                  <EuiBadge
                    css={{ width: "100%", height: "4vh" }}
                    color={color.hex}
                    onClick={addToasts}
                  >
                    <EuiText>
                      <p>{color.name}</p>
                    </EuiText>
                  </EuiBadge>
                </EuiToolTip>
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        </EuiPanel>
        <EuiGlobalToastList
          toasts={toasts}
          dismissToast={removeToast}
          toastLifeTimeMs={6000}
        />
      </Wrapper>
    </>
  );
};

export default Index;
