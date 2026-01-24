import "./styling/component-card.css";
import imageOrangutan from "./image/Orangutan.jfif";
import imageGorilla from "./image/Silverback_Gorilla.jpg";
import imageSulawesi from "./image/Sulawesi_Crested_Macaque_Monkey.jpeg";
import imageHowler from "./image/Howling_Monkey.jpg";
import imageGibbon from "./image/Gibbon.jpg";
import imageJapaneseMacaque from "./image/Japanese_Macaque.jpg";
import imageLangurs from "./image/Langurs.jpg";
import imageYunnan from "./image/Yunnan_Monkey.jpg";
import imageBaboon from "./image/Baboon.jpg";
import Card from "./components/Card";
import "./styling/website.css";

function App() {
  return (
    <div className="component-group">
      <div className="card-group1">
        <Card
          title="Orangutan"
          cardDescription="An orangutan is a highly intelligent, tree-dwelling great ape native to the rainforests of Borneo and Sumatra, known for its reddish-brown hair."
          modalDescription="Orangutans are large, intelligent great apes native to the tropical rainforests of Borneo and Sumatra.
                          They have long, powerful arms and reddish-brown hair, which help them move easily through trees where they spend most of their lives.
                          Orangutans are known for their high intelligence, using tools and learning behaviors by watching others.
                          They are mostly solitary animals, with adults usually living alone except for mothers caring for their young.
                          Sadly, orangutans are critically endangered due to deforestation, illegal wildlife trade, and habitat loss."
          image={imageOrangutan}
        />
        <Card
          title="Silverback Gorilla"
          cardDescription="A silverback gorilla is a mature male gorilla, recognized by the silver-colored hair on its back, that leads and protects its group in the forests of central Africa."
          modalDescription="Silverback gorillas are mature male gorillas native to the forests of central Africa.
                          They are called “silverbacks” because of the distinctive silver-gray hair that develops on their backs as they age.
                          A silverback is the leader of its group, responsible for making decisions, protecting members, and maintaining order.
                          Despite their powerful build and intimidating appearance, silverbacks are generally calm, gentle, and social.
                          Gorillas face threats from habitat loss, poaching, and disease, making conservation efforts essential for their survival."
          image={imageGorilla}
        />
        <Card
          title="Sulawesi Crested Macque"
          cardDescription="The Sulawesi crested macaque is a distinctive black-furred monkey from Indonesia, known for its tall head crest, expressive faces, and critically endangered status."
          modalDescription="The Sulawesi crested macaque is a black-furred monkey native to the island of Sulawesi in Indonesia.
                          It is easily recognized by its tall head crest, hairless face, and expressive facial features.
                          These macaques are highly social animals, living in large groups with complex communication and social behaviors.
                          They are omnivores, feeding on fruits, seeds, insects, and small animals found in forest environments.
                          The Sulawesi crested macaque is critically endangered due to habitat destruction, hunting, and the illegal wildlife trade."
          image={imageSulawesi}
        />
      </div>
      <div className="card-group2">
        <Card
          title="Howler Monkey"
          cardDescription="The howler monkey is a large New World monkey known for its extremely loud, echoing calls that it uses to communicate and defend territory."
          modalDescription="Howler monkeys are large New World monkeys native to Central and South America.
                          They are easily recognized by their extremely loud, echoing calls that can be heard up to 3 miles away.
                          These monkeys are primarily arboreal, spending most of their time in trees.
                          They have strong limbs and prehensile tails that help them move through the forest canopy.
                          Howler monkeys are known for their social behavior, living in troops with complex hierarchies."
          image={imageHowler}
        />
        <Card
          title="Gibbon"
          cardDescription="A gibbon is a small, agile great ape native to the tropical forests of Southeast Asia, known for its long arms and ability to swing through trees."
          modalDescription="Gibbons are small, agile great apes native to the tropical forests of Southeast Asia.
                          They have long arms and powerful legs that help them swing through trees with incredible speed and grace.
                          Gibbons are known for their loud, melodious calls that can be heard from great distances.
                          They are highly social animals that live in pairs or small family groups.
                          Gibbons are endangered due to habitat destruction and illegal pet trade.
                          Sadly, orangutans are critically endangered due to deforestation, illegal wildlife trade, and habitat loss."
          image={imageGibbon}
        />
        <Card
          title="Japanese Macaque"
          cardDescription="The Japanese macaque, also known as the snow monkey, is a species of Old World monkey native to Japan, famous for its ability to survive in cold climates."
          modalDescription="The Japanese macaque, also known as the snow monkey, is a species of Old World monkey native to Japan.
                          They are known for their ability to survive in cold climates, often seen bathing in hot springs during winter.
                          These monkeys are highly social and live in troops with complex hierarchies.
                          They are omnivores, feeding on fruits, seeds, insects, and small animals found in forest environments.
                          The Sulawesi crested macaque is critically endangered due to habitat destruction, hunting, and the illegal wildlife trade."
          image={imageJapaneseMacaque}
        />
      </div>
      <div className="card-group3">
        <Card
          title="Langurs"
          cardDescription="The langur is a type of Old World monkey found in South and Southeast Asia, known for their long tails and distinctive facial features."
          modalDescription="Langurs are Old World monkeys native to South and Southeast Asia.
                          They are known for their long tails, expressive faces, and distinctive fur patterns.
                          These monkeys are highly social, living in troops with complex hierarchies and communication systems.
                          They are omnivores, feeding on fruits, leaves, seeds, and small insects found in forest environments.
                          The Sulawesi crested macaque is critically endangered due to habitat destruction, hunting, and the illegal wildlife trade."
          image={imageLangurs}
        />
        <Card
          title="Yunann Snub Nosed"
          cardDescription="The Yunann snub-nosed monkey is a rare species of Old World monkey found in the southern China, known for its distinctive upturned nose and thick fur."
          modalDescription="The Yunann snub-nosed monkey is a rare Old World monkey native to the mountainous forests of southern China.
                          It is easily recognized by its distinctive upturned nose, thick fur, and long tail.
                          These monkeys are highly social and live in troops with complex hierarchies.
                          They are omnivores, feeding on fruits, leaves, seeds, and small insects found in forest environments.
                          The species is critically endangered due to habitat destruction and hunting."
          image={imageYunnan}
        />
        <Card
          title="Baboon"
          cardDescription="A baboon is a genus of Old World monkeys found in Africa and parts of Asia, known for their long snouts and distinctive facial features."
          modalDescription="Baboons are Old World monkeys native to Africa and parts of Asia.
                          They are known for their long snouts, expressive faces, and distinctive fur patterns.
                          Baboons are highly social and live in troops with complex hierarchies.
                          They are omnivores, feeding on fruits, leaves, seeds, and small insects found in forest environments.
                          Sadly, orangutans are critically endangered due to deforestation, illegal wildlife trade, and habitat loss."
          image={imageBaboon}
        />
      </div>
    </div>
  );
}

export default App;
