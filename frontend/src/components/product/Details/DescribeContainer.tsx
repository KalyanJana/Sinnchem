import { Box, CardContent, List, ListItem, Typography } from "@mui/material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
const Items = [1, 2, 3, 4, 5];

function DescribeContainer() {
  return (
    <CardContent sx={{ flex: "1 0 auto",  display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography component="div" variant="h5">
        Product Name
      </Typography>
      <Typography
        component="div"
        variant="subtitle2"
        sx={{ color: "primary.main" }}
      >
        Be the first to Review this product
      </Typography>

      <Box display="flex" flexDirection="row">
        <Typography
          component="div"
          variant="h5"
          display="flex"
          alignItems="center"
        >
          <CurrencyRupeeOutlinedIcon fontSize="small" /> 450.00
        </Typography>

        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "small",
            marginLeft: 1,
          }}
        >
          <Box
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "line-through",
              color: "text.secondary",
            }}
          >
            <CurrencyRupeeOutlinedIcon sx={{ fontSize: "inherit" }} />
            500.00
          </Box>

          <Box component="span" sx={{ marginLeft: "0.5rem", color: "green" }}>
            10% off
          </Box>
        </Typography>
      </Box>

      <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, mollitia magnam libero quis odit quam nihil quasi molestiae assumenda et, dicta enim vitae ullam asperiores voluptate optio magni officiis qui exercitationem officia porro. Harum sequi similique accusamus magnam porro! Ea assumenda impedit obcaecati sed recusandae animi blanditiis dolores laudantium fuga ipsum architecto totam quaerat maiores, cupiditate ullam, quod, suscipit iusto! Aspernatur earum illum facilis alias, exercitationem nostrum velit quibusdam dolores eius ipsa in temporibus tenetur quos molestias nam laboriosam dolorum maiores nisi voluptatibus hic necessitatibus? Ea, provident corrupti. Voluptas sint ea cumque nobis architecto officiis culpa ex voluptatem deleniti necessitatibus, laborum consequuntur quae obcaecati harum et debitis suscipit neque placeat beatae reprehenderit nostrum vel ullam sed! Reprehenderit corporis laudantium soluta illo beatae hic in, aut blanditiis dignissimos optio amet excepturi quasi quibusdam quidem tempore neque ut voluptas ullam assumenda asperiores quod modi temporibus nobis! Ipsa omnis quis optio earum veritatis perspiciatis quisquam beatae sint eaque repellendus, totam, eveniet id eius voluptatem exercitationem deserunt vero. Labore eius dolores possimus fuga similique sapiente expedita hic, ea ipsam molestias porro? Esse omnis assumenda tempore autem laudantium, dicta dignissimos. Iste debitis laborum dolorem modi sequi veritatis molestias odit ipsum possimus et, eius dolores eaque doloremque earum voluptatum optio placeat eum beatae id cum rerum. Velit saepe dolorem eveniet officia, doloribus, vel provident quae itaque quidem unde quam molestiae corrupti pariatur omnis, facere dolor optio temporibus ipsum numquam necessitatibus eum aspernatur veniam sit. Pariatur alias magni perferendis eius sed sequi, laborum omnis voluptatum est vel ipsa fugiat perspiciatis similique repudiandae optio consectetur. Ipsum quam cumque, sunt quibusdam similique voluptatibus sit quaerat error eos consequuntur aliquid nam. Accusantium dolore officia laboriosam, natus voluptate dignissimos temporibus suscipit incidunt autem reprehenderit ad eveniet, accusamus delectus iure. Labore minus dicta qui nesciunt explicabo. Aperiam esse eius, ipsa aliquid in, illo deleniti repudiandae pariatur eum ad nostrum dolorem tenetur doloremque officia magnam minima illum molestiae voluptatem. Veniam excepturi hic asperiores enim voluptate maiores magni mollitia quaerat ut quidem eum iure accusantium ducimus itaque, eaque repellendus incidunt delectus doloremque reiciendis aliquam fuga eius ea voluptas. Excepturi fugit optio, aperiam suscipit quisquam at deleniti magni omnis dolor nam fuga iure molestias, voluptatem placeat incidunt nostrum numquam labore perferendis corporis voluptas tempora cupiditate amet esse eveniet! Debitis, cumque odio reprehenderit distinctio amet voluptatibus ea quo unde, impedit sint iste earum obcaecati libero veritatis dolor, tenetur repellat. Quasi ratione iusto, ex beatae hic, rem provident corporis ipsum reiciendis enim odio, animi numquam aliquam quos in deserunt? Nisi dolores, recusandae illum ullam, accusamus quas reprehenderit ipsa facere sapiente debitis sequi beatae corporis, quasi ab. Quisquam, voluptatibus. Est amet debitis eius qui maxime repellat. Corrupti necessitatibus iusto ab optio laborum? Tempore temporibus neque nihil dolores praesentium error est illum optio quod autem in debitis suscipit ipsa consectetur officia quo aperiam, vitae numquam iste vel ipsum! Quas alias asperiores magnam aliquid exercitationem sapiente eaque? Temporibus, suscipit! Sed totam iure iusto temporibus, assumenda libero, consequatur voluptatibus quis deleniti molestiae eaque. Ex mollitia error voluptatibus eligendi, saepe aut ullam.</Typography>
    </CardContent>
  );
}

export default DescribeContainer;
