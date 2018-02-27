import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import chai from "chai";
import sinonChai from "sinon-chai";
const expect = chai.expect;
chai.use(sinonChai);

import Tabber from "../components/tabber";

describe("Tabber", () => {

  describe("Mounting", () => {

    it("should render Tabber into the document", () => {
      const component = shallow(<Tabber />);
      expect(component).to.not.be.false;
    });

    it("should render Tabber.Controls into the document", () => {
      const component = shallow(<Tabber.Controls />);
      expect(component).to.not.be.false;
    });

    it("should render Tabber.Tab into the document", () => {
      const component = shallow(
        <Tabber.Tab>
          <div />
        </Tabber.Tab>
      );
      expect(component).to.not.be.false;
    });

    it("should render Tabber.Container into the document", () => {
      const component = shallow(<Tabber.Container />);
      expect(component).to.not.be.false;
    });

    it("should render Tabber.Content into the document", () => {
      const component = shallow(
        <Tabber.Content>
          <div />
        </Tabber.Content>
      );
      expect(component).to.not.be.false;
    });
  });
});
