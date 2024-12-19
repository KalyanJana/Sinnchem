import { Card, Typography } from "@mui/material";
import CategoryItem from "./CategoryItem";


function CategoryContainer(){

    return(
        <Card sx={{mt: '1rem', overflow: 'clip'}}>
            <CategoryItem />
        </Card>
    )
}

export default CategoryContainer