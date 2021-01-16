import styles from "../styles/Home.module.css";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import ListSection from "../components/Homepage/ListSection";
import MegaFeature from "../components/Homepage/MegaFeature";
import SidebarRecs from "../components/Homepage/SidebarRecs";

import { connect } from "react-redux";

const recommendations = [
  {
    name: "nivy",
    avatar: "https://bit.ly/dan-abramov",
    title: "@nivy",
    subtitle: "aka orange",
    iconindex: 3,
  },
  {
    name: "aipiox",
    avatar: "https://bit.ly/dan-abramov",
    title: "@aipiox",
    subtitle: "robot revolution",
    iconindex: 3,
  },
  {
    name: "noor",
    avatar: "https://bit.ly/dan-abramov",
    title: "@noor",
    subtitle: "uwaterloo!",
    iconindex: 3,
  },
];

const requests = [
  {
    name: "jarrod",
    avatar: "https://bit.ly/dan-abramov",
    title: "@nivy",
    subtitle: "typo fix",
    iconindex: 1,
  },
  {
    name: "aipiox",
    avatar: "https://bit.ly/dan-abramov",
    title: "@aipiox",
    subtitle: "added paragraph",
    iconindex: 2,
  },
  {
    name: "noor",
    avatar: "https://bit.ly/dan-abramov",
    title: "@noor",
    subtitle: "rephrasing",
    iconindex: 0,
  },
];

function Home() {
  const featureEpic =
    "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg";
  const featureAuthor = "Naruto Uzumaki";
  const featureTitle = "Best article ever";
  const featureTimestamp = "5 hours ago";
  const desc =
    "For a given source node in the graph, the algorithm finds the shortest path between that node and every other.[8]:196–206 It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined.";

  return (
    <Center>
      <Grid>
        <Grid templateColumns="repeat(3, 1fr)" className={styles.main}>
          <GridItem colSpan={2} mr={10}>
            <MegaFeature
              img={featureEpic}
              desc={desc}
              title={featureAuthor}
              subtitle={featureTitle}
              timestamp={featureTimestamp}
            />
            <ListSection />
          </GridItem>
          <GridItem colSpan={1} mb={28}>
            <SidebarRecs title="Review Status" data={requests} />
            <SidebarRecs title="Who to Follow" data={recommendations} />
          </GridItem>
        </Grid>
      </Grid>
    </Center>
  );
}

export default connect(null, null)(Home);
