import React, { Component } from "react";

export default class Items extends Component {
  render() {
    return (
      <div>
        <div className="p-4 service_item">
          <div className="bg-light p-3 item_2">
            <div className="icon_item">
              <i class="fa-solid fa-cloud-arrow-up fa-4x"></i>
            </div>
            <h3>Feature boxes</h3>
            <p>
              We've created some custom feature boxes using Bootstrap icons!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
