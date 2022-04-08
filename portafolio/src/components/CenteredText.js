import { Grid } from "@material-ui/core";

export function CenterText() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <div>Element 1</div> <div>Element 2</div>
        </Grid>
    );
}
