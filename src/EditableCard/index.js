import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import colors from '../utils/colors';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '../Card';
import EditableContext from '../context/EditableContext';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  close: {
    position: 'absolute',
    top: `${theme.spacing(1)}px`,
    right: `${theme.spacing(1)}px`,
    color: theme.palette.grey[300],
    padding: 0,
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  edit: {
    color: theme.palette.secondary.main,
  },
  cancel: {
    color: theme.palette.error.main,
  },
  accept: {
    color: theme.palette.success.main,
  },
  iconButton: {
    padding: 0,
    minWidth: 0,
    justifyContent: 'center',
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  card: {
    padding: '40px',
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    margin: '20px 0',
  },
  hidden: {
    visibility: 'hidden'
  },
  smallSpacing: {
    margin: '.1em'
  },
  mediumSpacing: {
    margin: '.5em'
  }
}))

const EditableCard = props => {
  const { onAccept, editIcon, cancelIcon, acceptIcon, editLabel, cancelLabel, acceptLabel, children, ...inputProps } = props;
  const theme = useTheme();
  const [editable, setEditable] = useState(false);

  const styles = useStyles();

  return (
    <Card {...inputProps} className={styles.card}
      actions={
        <div className={styles.row}>
          {
            <div className={styles.row} style={{ position: 'relative' }}>
              <div className={clsx(styles.row, editable ? '' : styles.hidden)}>
                <Button className={styles.iconButton} disableRipple onClick={() => { onAccept && onAccept(() => { setEditable(false) }) }}>
                  <div className={clsx(styles.center, styles.accept)}>
                    <CheckIcon />
                    <div className={styles.smallSpacing} />
                    <div>{acceptLabel}</div>
                  </div>
                </Button>

                <div className={styles.mediumSpacing} />

                <Button className={styles.iconButton} disableRipple onClick={() => { setEditable(false); }}>
                  <div className={clsx(styles.center, styles.cancel)} style={{ display: 'flex' }}>
                    <CloseIcon />
                    <div className={styles.smallSpacing} />
                    <div>{cancelLabel}</div>
                  </div>
                </Button>
              </div>

              <Button className={clsx(styles.iconButton, !editable ? '' : styles.hidden)} disableRipple onClick={() => { setEditable(true); }} style={{ position: 'absolute', right: 0 }}>
                <div className={clsx(styles.center, styles.edit)} style={{ display: 'flex' }}>
                  <EditOutlinedIcon />
                  <div className={styles.smallSpacing} />
                  <div>{editLabel}</div>
                </div>
              </Button>
            </div>
          }
        </div>
      }>
      <EditableContext.Provider value={editable}>
        {children}
      </EditableContext.Provider>
    </Card>
  );
}

EditableCard.propTypes = {
  editable: PropTypes.bool
}

export default EditableCard;
