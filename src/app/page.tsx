"use client";

import { Modal ,Title ,TextInput ,Group ,Container ,Select ,Radio ,Checkbox ,Text, Button ,Anchor ,Space} from "@mantine/core";

import { runningPlans } from "@components/libs/runningPlans";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function Home() {
  const [opened, {open, close}] = useDisclosure(false);
  const [termAccepted, setTermAccepted] = useState(false);
  
  return (
    <>

    <Container size="500px">
      <Title fs="italic" ta="center" >Register CMU Marathon</Title>

      <Group grow>
        <TextInput 
          label="First Name" placeholder="Input First Name" required
        />
        <TextInput 
          label="Last Name" placeholder="Input Last Name" required
        />
      </Group>
      <Select
        label="Running Plan:"
        data={runningPlans}
        placeholder="Select Running Plan"
        searchable={true}
        required
      />
      
      <Space h="lg"/>
      <Radio.Group label="Gender" >
        <Radio mt="sm" labelPosition="right" value= "Male" label="Male" color="indigo"/>
        <Radio mt="sm" labelPosition="right" value="Female" label="Female" color="indigo"/>
      </Radio.Group>

      <Space h="lg"/>
      <Group>
        <Checkbox 
          checked={termAccepted} 
          onChange={(event)=>setTermAccepted(event.target.checked)}
        />
        <Text>I accept 
          <Anchor onClick={open}> terms and condition</Anchor>
          </Text>
      </Group>

      <Group grow>
        <Button mt="sm" onClick={open} disabled={!termAccepted}>Register</Button>
       
      </Group>
      

     </Container>

     <Modal opened={opened} onClose={close} title="terms and condition">
        <Text>
          1.First terms and condition ...<br/>
          2.Second terms and condition ...<br/>
          3.Third terms and condition ...<br/>
        </Text>
        <Button onClick={close}>Confirm</Button>
      </Modal>
  


      
        
    </>
  );
}
