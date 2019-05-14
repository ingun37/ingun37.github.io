import React from 'react';
import '@material/react-top-app-bar/index.scss';
import '@material/react-material-icon/index.scss';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import { Icon } from "./Icons";

export class Bar extends React.Component {
  onMail() {
    window.location.href = `mailto:ingun37@gmail.com`;
  }
  onGithub() {
    window.open("https://github.com/ingun37", '_blank');
  }
  onWordpress() {
    window.open("https://ingun37.wordpress.com", '_blank');
  }
  render() {
    return (
      <TopAppBar shortCollapsed={true} style={{ width: '144px' }}>
        <TopAppBarRow>
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon hasRipple icon='email' onClick={this.onMail} />
          </TopAppBarIcon>
          <TopAppBarIcon navIcon >
            <Icon img="github" color="white" onClick={this.onGithub} />
          </TopAppBarIcon>
          <TopAppBarIcon navIcon >
            <Icon img="wordpress" color="white" onClick={this.onWordpress} />
          </TopAppBarIcon>
        </TopAppBarRow>
      </TopAppBar>
    )
  }
}