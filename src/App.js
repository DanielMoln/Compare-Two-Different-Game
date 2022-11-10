import {Grid, List, ListItem, ListItemIcon, ListItemText, styled, Typography} from "@mui/material";
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

const TEXT_FONT_WEIGHT = 600;

const Wallpaper = styled("img")(({
  width: "100%",
  maxWidth: "1000px",
  maxHeight: "400px",
  height: "auto",
  objectFit: "fit",
  borderRadius: "10px"
}))

const TextBlock = styled('div')(({
  margin: "20px 0",
  width: "100%",
  textAlign: "center"
}))

const SubTitle = styled(Typography)(({
  fontWeight: 700,
  marginBottom: "1.3em",
  padding: "10px 30px",
  border: "0.5px solid rgba(208, 215, 222, 0.71)",
  borderRadius: "5px",
  background: "url(https://img.freepik.com/free-vector/mandala-illustration_53876-81806.jpg?w=1380&t=st=1668086273~exp=1668086873~hmac=86862a836d24bc98dde324ba79873928104989ce31e238d3968b79f14089fbdc)",
  backgroundSize: "cover",
  color: "#fff",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "400px"
}))

const Text = styled(Typography)(({
  fontWeight: TEXT_FONT_WEIGHT
}))

function App() {
  return (
    <div>
      <Grid container direction="column" spacing={10}>
        <Grid item xs>
          <Grid container justifyContent="center" alignItems="flex-start">
            <Grid item xs>
              <Wallpaper src="https://www.minecraft.net/content/dam/games/minecraft/key-art/CC-Update-Part-II_600x360.jpg" alt="minecraft" />

              <TextBlock>
                <SubTitle variant="h4">Minecraft</SubTitle>

                <Text variant="h6">
                  A Minecraftban a játékosok egy blokkokból álló, pixeles, 3D világot fedezhetnek fel, felhasználhatják annak a nyersanyagait, eszközöket készíthetnek,
                  építményeket építhetnek, továbbá a játék módjától függően harcolhatnak számítógép vezérelte ellenségekkel, vagy akár együttműködhetnek más játékosokkal.
                  A játék több módban is játszható: a gyűjtögetésre, barkácsolásra és harcokra fókuszáló túlélő és a végtelen forrással rendelkező kreatív, vagy szemlélő módban.
                  A Java alapú kiadásban különböző modokkal új játékmechanikával, tárgyakkal és grafikával lehet kiegészíteni a játékot.
                </Text>
              </TextBlock>
            </Grid>

            <Grid item xs>
              <Wallpaper src="https://www.hrkgame.com/media/games/.thumbnails/header_OU4lDsr.jpg/header_OU4lDsr-460x215.jpg" alt="dayz" />

              <TextBlock>
                <SubTitle variant="h4">DayZ</SubTitle>

                <Text variant="h6">
                  A játék a kitalált posztszovjet Chernarus Köztársaságba helyezi a játékost, az ARMA 2 eredeti helyszínére, ahol egy rejtélyes pestis a lakosság nagy részét erőszakos "fertőzöttté" változtatta.
                  Túlélőként a játékosnak élelmet, vizet, fegyvert és gyógyszert kell kikukkantania a világból, miközben megöli vagy elkerüli a fertőzötteket, és meg kell ölni, elkerülni vagy együttműködni más játékosokkal,
                  hogy túlélje a járványt.
                </Text>
              </TextBlock>

            </Grid>
          </Grid>
        </Grid>

        <Grid item xs>
         <Grid container xs justifyContent="center" alignItems="flex-start">
          <Grid item xs>
            <TextBlock sx={{textAlign: "center"}}>
              <SubTitle variant="h4">Hasonlóságok</SubTitle>

              <List>
                <ListItem>
                  <ListItemIcon><AdjustOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={<Text>Mindkét játék a túlélésről szól.</Text>} sx={{fontWeight: TEXT_FONT_WEIGHT}}/>
                </ListItem>

                <ListItem>
                  <ListItemIcon><AdjustOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={<Text>Mind a kettő többjátékos módban is játszható.</Text>} sx={{fontWeight: TEXT_FONT_WEIGHT}}></ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon><AdjustOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={<Text>Mind a kettő játékban a vadonban talált eszközöket tudod hasznosítani a túléléshez.</Text>} sx={{fontWeight: TEXT_FONT_WEIGHT}}/>
                </ListItem>

                <ListItem>
                  <ListItemIcon><AdjustOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={<Text>Különböző ellenfelekkel tudjuk felvenni a harcot.</Text>} sx={{fontWeight: TEXT_FONT_WEIGHT}}/>
                </ListItem>

                <ListItem>
                  <ListItemIcon><AdjustOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={<Text>Mindkét játék teljes szabadságot biztosít.</Text>} sx={{fontWeight: TEXT_FONT_WEIGHT}}/>
                </ListItem>
              </List>
            </TextBlock>
          </Grid>

          <Grid item xs>
            <TextBlock  sx={{textAlign: "center"}}>
              <SubTitle variant="h4">Különbségek</SubTitle>

              <List>
                <ListItem>
                  <ListItemIcon><AdjustOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={<Text>A Minecraft-al ellentétben a DayZ világában a különböző ellenfeleken kívűl az elemekkel is megkell küzdened.</Text>} sx={{fontWeight: TEXT_FONT_WEIGHT}}/>
                </ListItem>

                <ListItem>
                  <ListItemIcon><AdjustOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={<Text>A minecraftban csak közelharci fegyverek íj és számszeríj érhető el, mint önvédelmi eszközök.</Text>} sx={{fontWeight: TEXT_FONT_WEIGHT}}/>
                </ListItem>

                <ListItem>
                  <ListItemIcon><AdjustOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={<Text>A minecraft egy sokkal egyszerűbb arcade jellegű élményt nyújt.</Text>} sx={{fontWeight: TEXT_FONT_WEIGHT}}/>
                </ListItem>
              </List>
            </TextBlock>
          </Grid>
        </Grid>
        </Grid>

        <Grid item xs>
          <Grid container justifyContent="center" alignItems="flex-start">
          <Grid item xs>
            <TextBlock>
              <SubTitle variant="h4">Miben tudna fejlődni a Minecraft?</SubTitle>

              <Text variant="h6">
                Szerintem a Minecrat alapjában véve egy jó játék, azonban én kevésnek tartom az állatvilágot illetve a kalandokat.
                Ha én fejleszteném a játékot akkor sokkal nagyobb hangsúlyt kapna az állat rendszer illetve a játék Ai rendszere.
              </Text>
            </TextBlock>
          </Grid>
          <Grid item xs>
            <TextBlock>
              <SubTitle variant="h4">Miben tudna fejlődni a DayZ?</SubTitle>

              <Text variant="h6">
                A játék alapjában véve egy nagyon jó hardcore élményt nyújt, remekül áttudja adni az apokalipszis atmoszféráját.
                Azonban a játék biztosíthatna több segítséget a játék elkezdésében és megértésében, mivel kezdéskor a játék nem látja el a játékost megfelelő eszközökkel a túléléshez.
              </Text>
            </TextBlock>

          </Grid>
        </Grid>
        </Grid>

        <Grid item xs>
          <Grid container justifyContent="center" alignItems="flex-start">
          <Grid item xs>
            <TextBlock>
              <SubTitle variant="h4">Miért szeretem a Minecraft-ot?</SubTitle>

              <Text variant="h6">
                Szeretem a játékot mivel bármit megépíthetek benne illetve gyakorolhatom a Java programozási nyelvet, mivel a játék java nyelven írodott és lehetőséget biztosít arra,
                hogy a játékban szereplő szerverekhez pluginokat írjunk.
              </Text>
            </TextBlock>
          </Grid>
          <Grid item xs>
            <TextBlock>
              <SubTitle variant="h4">Miért szeretem a DayZ-t?</SubTitle>

              <Text variant="h6">
                Engem a DayZ-ben a remek közösség, a kívállóan megírt történet illetve a remek hangulatú atmoszféra fogott meg.
              </Text>
            </TextBlock>

          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
