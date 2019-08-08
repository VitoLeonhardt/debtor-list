// @flow

import React, { useState, useEffect } from "react";
import { Modal, Input, Button, Icon } from "semantic-ui-react";
import { formatter, backToDefault } from "../misc/Misc";

import type { ModalPropsT } from "../misc/Types";

export const DebtorModal = (props: ModalPropsT) => {
    const { debtor, onClose, open } = props;

    const [ textField, setTextField ] = useState("");
    const [ valid, setValid ] = useState(true);
    const onChange = (e, { value }) => {
        setTextField(value);
        const actualValue = backToDefault(value);
        setValid(actualValue !== NaN && debtor && (actualValue > debtor.amount - debtor.amount_left));
    }

    useEffect(() => {
        debtor && setTextField(formatter.format(debtor.amount));
        setValid(true);
    }, [debtor]);

    return (
      <Modal
        open={open}
        onClose={() => onClose(null)}
        size='small'
      >
        <Modal.Header>
            {debtor ? debtor.name : ""}
        </Modal.Header>
        <Modal.Content>
            <Input aria-label="modal-input" value={textField} onChange={onChange} error={!valid} />
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={() => { onClose(debtor && { ...debtor, amount_left: debtor.amount - backToDefault(textField)})}} disabled={!valid}>
            <Icon name='checkmark' /> OK
          </Button>
        </Modal.Actions>
      </Modal>
    )
}