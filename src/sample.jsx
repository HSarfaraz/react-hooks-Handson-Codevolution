mui-modalhandleClose = event => {
    if (this.anchorEl.contains(event.target)) {
        return;
    }

    this.setState({ open: false });
};
<Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
    {({ TransitionProps, placement }) => (
        <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
            <Paper>
                <ClickAwayListener onClickAway={this.handleClose }>
                    <MenuList>
                        <MenuItem onClick={this.handleClose }>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose }>My account</MenuItem>
                        <MenuItem onClick={this.handleClose }>Logout</MenuItem>
                    </MenuList>
                </ClickAwayListener>
            </Paper>
        </Grow>
    )}
</Popper>