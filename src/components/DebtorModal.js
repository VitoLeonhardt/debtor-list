// @flow

import React, { useState, useEffect } from "react";
import { Modal, Input, Button, Icon } from "semantic-ui-react";
import { formatter, backToDefault } from "../misc/Misc";

import type { ModalPropsT } from "../misc/Types";

export const DebtorModal = (props: ModalPropsT) => {
    const { debtor } = props;

    const [ textField, setTextField ] = useState(0);
    const [ valid, setValid ] = useState(true);
    const onChange = (e, { value }) => {
        setTextField(value);
        const actualValue = backToDefault(value);
        setValid(actualValue !== NaN && debtor && (actualValue > debtor.amount - debtor.amount_left));
    }

    useEffect(() => {
        debtor && setTextField(formatter.format(debtor.amount));
    }, [debtor]);

    return (
      <Modal
        open={props.open}
        onClose={() => {}}
        size='small'
      >
        <Modal.Header>
            {debtor ? debtor.name : ""}
        </Modal.Header>
        <Modal.Content>
            <Input value={textField} onChange={onChange} error={!valid} />
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={() => {}} disabled={!valid}>
            <Icon name='checkmark' /> OK
          </Button>
        </Modal.Actions>
      </Modal>
    )
}