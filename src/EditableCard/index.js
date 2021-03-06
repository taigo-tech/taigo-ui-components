import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import colors from '../utils/colors';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Card from '../Card';
import EditableContext from '../context/EditableContext';
import LoadingContext from '../context/LoadingContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  close: {
    // position: 'absolute',
    // top: `${theme.spacing(1)}px`,
    // right: `${theme.spacing(1)}px`,
    color: theme.palette.grey[300],
    padding: 0,
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  load: {
    // position: 'absolute',
    // right: 0,
    // top: '50%',
    // transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    margin: '10px 0 20px',
  },
  fadeout: {
    // visibility: 'hidden',
    // opacity: 0,
    // transition: 'visibility 0s .1s, opacity .1s linear',
    display: 'none',
  },
  fadein: {
    // visibility: 'visible',
    // opacity: 1,
    // transition: 'opacity .2s .2s linear',
    // display: 'initial',
  },
  smallSpacing: {
    margin: '.1em'
  },
  mediumSpacing: {
    margin: '.5em'
  }
}))

const EditableCard = props => {
  const { onAccept, onCancel, isLoading, editIcon, cancelIcon, acceptIcon, editLabel, cancelLabel, acceptLabel, children, disabled, onFormToggle, customActions, ...inputProps } = props;
  const theme = useTheme();
  const styles = useStyles();
  const [editable, setEditable] = useState(false);

  const handleToggle = canEdit => {
    if (typeof onFormToggle === 'function') {
      onFormToggle(canEdit);
    }

    setEditable(canEdit);
  }

  return (
    <Card {...inputProps} className={styles.card}
      actions={disabled ? customActions : (
        <div className={styles.row} style={{ position: 'relative' }}>
          <div className={clsx(styles.row, !editable && !isLoading ? styles.fadein : styles.fadeout)}>
            {customActions}
          </div>

          <div className={styles.mediumSpacing} />

          <div className={clsx(styles.row, editable && !isLoading ? styles.fadein : styles.fadeout)}>
            <Button className={styles.iconButton} disableRipple onClick={() => { onCancel ? onCancel(() => { handleToggle(false) }) : handleToggle(false) }}>
              <div className={clsx(styles.center, styles.cancel)} style={{ display: 'flex' }}>
                <CloseIcon />
                <Hidden smDown implementation="css">
                  <div className={styles.smallSpacing} />
                  <div>{cancelLabel}</div>
                </Hidden>
              </div>
            </Button>

            <div className={styles.mediumSpacing} />

            <Button className={styles.iconButton} disableRipple onClick={() => { onAccept && onAccept(() => { handleToggle(false) }) }}>
              <div className={clsx(styles.center, styles.accept)}>
                <CheckIcon />
                <Hidden smDown implementation="css">
                  <div className={styles.smallSpacing} />
                  <div>{acceptLabel}</div>
                </Hidden>
              </div>
            </Button>
          </div>

          <Button className={clsx(styles.iconButton, !editable && !isLoading ? styles.fadein : styles.fadeout)} disableRipple onClick={() => { handleToggle(true); }}>
            <div className={clsx(styles.center, styles.edit)} style={{ display: 'flex' }}>
              <EditOutlinedIcon />
              <Hidden xsDown implementation="css">
                <div className={styles.smallSpacing} />
                <div>{editLabel}</div>
              </Hidden>
            </div>
          </Button>

          <div className={clsx(styles.load, isLoading ? styles.fadein : styles.fadeout)}>
            <CircularProgress size={20} className={styles.progress} />
          </div>
        </div>
      )}>
      <LoadingContext.Provider value={isLoading}>
        <EditableContext.Provider value={editable}>
          {children}
        </EditableContext.Provider>
      </LoadingContext.Provider>
    </Card>
  );
}

EditableCard.propTypes = {
  disabled: PropTypes.bool,
  onFormToggle: PropTypes.func,
};

EditableCard.defaultProps = {
  disabled: false,
}

export default EditableCard;
