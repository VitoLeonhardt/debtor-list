// @flow

import React from "react";
import { Modal } from "semantic-ui-react";

import type { ModalPropsT } from "../misc/Types";

export const DebtorModal = (props: ModalPropsT) => {
    const { debtor } = props;

    return (
      <Modal
        open={props.open}
        onClose={() => {}}
        size='small'
      >
        <Modal.Content>
            {debtor ? debtor.name : ""}

        </Modal.Content>
      </Modal>
    )
}