console.log("Opening Metra Settings");

let line = '';

let stops = [
  { "name": "Elburn" },
  { "name": "La Fox" },
  { "name": "Geneva" },
  { "name": "West Chicago" },
  { "name": "Winfield" },
  { "name": "Wheaton" },
  { "name": "College Avenue" },
  { "name": "Glen Ellyn" },
  { "name": "Lombard" },
  { "name": "Villa Park" },
  { "name": "Elmhurst" },
  { "name": "Berkeley" },
  { "name": "Bellwood" },
  { "name": "Melrose Park" },
  { "name": "Maywood" },
  { "name": "River Forest" },
  { "name": "Oak Park" },
  { "name": "Kedzie" },
  { "name": "Ogilvie" }
];

function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Metra Schedule</Text>}>
        <Text>Union Pacific West</Text>
        <AdditiveList
          settingsKey="stops"
          addAction={
            <Select
              label="Choose Stops"
              options={stops}
            />
          }
          maxItems="2"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);