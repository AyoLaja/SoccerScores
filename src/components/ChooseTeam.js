import React, { Component } from 'react';
import ButtonMcfc from './ButtonMcfc';
import ButtonMufc from './ButtonMufc';
import ButtonChelsea from './ButtonChelsea';
import ButtonLiverpool from './ButtonLiverpool';
import ButtonChicken from './ButtonChicken';
import '../App.css';

const ChooseTeam = () => {
  return (
    <div>
      <button className="btn-chooseteam">
        Choose Team &nbsp; <i className="ion-chevron-up"></i>
      </button>
      <div className="teams">
        <ButtonMcfc/>
        <ButtonMufc/>
        <ButtonChelsea/>
        <ButtonLiverpool/>
        <ButtonChicken/>
      </div>
    </div>
  );
}

export default ChooseTeam;
