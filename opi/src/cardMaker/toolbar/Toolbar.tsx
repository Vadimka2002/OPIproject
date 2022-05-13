import styles from "./Toolbar.module.css";
import ToolbarText from "./toolbarText/ToolbarText";
import ToolbarImg from "./toolbarImg/ToolbarImg";
import ToolbarFilter from "./toolbarFilter/ToolbarFilter";
import ToolbarBackground from "./toolbarBackground/ToolbarBackground";
import ToolbarObject from "./toolbarObject/ToolbarObject";
import ToolbarCanvas from "./toolbarCanvas/ToolbarCanvas";
import { connect } from "react-redux";
import TopToolbar from "./topToolbar/TopToolbar";

function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <TopToolbar />      
      <ToolbarText />      
      <ToolbarImg />      
      <ToolbarBackground />      
      <ToolbarFilter />      
      <ToolbarObject />      
      <ToolbarCanvas />
    </div>
  );
}

export default connect()(Toolbar);
