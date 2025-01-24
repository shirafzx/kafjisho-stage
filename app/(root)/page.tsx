import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        perferendis eius quas, quam quibusdam repellendus, nobis ad asperiores
        vel eligendi aliquam veniam ab expedita! Quos et eius harum amet soluta
        mollitia unde voluptates veritatis, voluptate ratione aperiam alias non
        officia delectus odit dolorem, animi velit ipsam eveniet tempora ex
        iusto. Iusto, ab, sunt architecto cumque aperiam accusamus excepturi
        aspernatur molestiae ipsam suscipit reprehenderit magni assumenda
        temporibus rerum, in est dolor delectus! Illum qui culpa numquam optio
        veritatis. Sed molestiae consectetur, excepturi amet libero labore iste
        perferendis fuga dolor laborum dolores veritatis rem vero cum eius
        tempora obcaecati ad ut! Reiciendis, repellendus veritatis magnam saepe
        at necessitatibus obcaecati aut quos minus nisi qui ab iusto a animi
        blanditiis! Et atque maiores aliquam. Rem vero eligendi esse blanditiis
        a vitae praesentium et sapiente fugit, officia magni natus illum
        incidunt? Nulla, consequatur, vero esse harum quis ut earum tempora
        rerum expedita rem non ipsum! Laboriosam obcaecati sunt itaque repellat
        sapiente ut velit illum maxime magnam voluptatibus. Qui esse, dolore aut
        odio quam modi expedita quia accusamus assumenda quibusdam eaque quod,
        dignissimos ex doloremque dolorum totam maiores optio, ratione libero
        vero est. Nesciunt, quibusdam quidem. Aliquam eos numquam, placeat sint
        molestiae vero dolorem magnam neque sunt saepe nulla fuga veritatis
        consequatur vitae labore illum nesciunt ipsam nisi! Culpa, sint
        dignissimos deleniti, quam aspernatur ut voluptatem est unde repellendus
        quas reprehenderit ea dolore esse omnis! Est animi molestiae voluptatem
        expedita sed aliquam incidunt saepe, deserunt impedit, nisi non quos,
        repellendus architecto mollitia voluptas fugiat dolore consectetur nobis
        perspiciatis officiis atque illo labore tempora! Iusto distinctio
        laboriosam animi voluptates ad vel, nulla rem dolorem, totam libero
        maxime necessitatibus exercitationem dolor eaque provident aliquam
        laborum nesciunt reiciendis aliquid harum, corrupti recusandae!
        Reprehenderit, molestiae! Soluta atque veritatis corrupti quas illum
        iure fuga dolores modi officia voluptates corporis id debitis autem, a
        ipsam ratione dolorum? Sed id suscipit vel modi unde minus maxime
        provident quo, obcaecati eveniet aut esse ullam incidunt dolorum
        officiis repellat ea similique veritatis, ad aliquid blanditiis dicta.
        Illo sapiente repudiandae fugiat ratione, animi quasi vitae ipsam rerum
        aliquid totam, modi et doloremque eos vero laborum quas esse reiciendis.
        Libero itaque ipsam sequi minus delectus qui! Odio quos a possimus at
        animi, reprehenderit numquam distinctio illum dignissimos eveniet quas
        laudantium quo illo suscipit fuga facilis. Ratione eos excepturi atque
        modi impedit molestiae voluptas corporis porro ipsum labore est sed
        voluptatum eius, saepe velit quibusdam doloremque, magni aspernatur?
        Placeat officia quo quisquam voluptatem quia aliquid laudantium aperiam
        delectus optio, inventore nostrum, eius dignissimos nesciunt? Cumque
        quos tempore, qui dignissimos necessitatibus adipisci voluptate
        assumenda inventore. Voluptatibus ducimus molestias laborum quo, placeat
        incidunt illum, at numquam sapiente perspiciatis facere. Libero aut
        ratione asperiores molestias quos delectus unde, dignissimos,
        necessitatibus earum facere veniam autem consectetur. Harum expedita
        totam sint nam quas neque architecto aliquid voluptatum unde accusamus
        deleniti, natus rem incidunt ipsam non rerum at aspernatur autem officia
        iure ducimus? Ea eligendi minima sunt, unde doloremque dolore hic fuga
        ex, temporibus laboriosam debitis repellendus illum neque maxime in
        nostrum blanditiis enim necessitatibus totam accusamus, ipsam quasi.
        Quibusdam, odit ut. Sequi labore molestiae officiis provident, minus
        nobis expedita! Earum autem aperiam sunt nobis labore voluptatem
        explicabo aliquid eveniet quisquam odit, veniam expedita ipsam magnam
        velit eligendi consequuntur tempora accusantium. Voluptates quidem a
        quis consectetur ullam, sequi cumque rem eius! Dolorem nesciunt officiis
        voluptates fuga suscipit reiciendis ipsum dolores, amet modi at ut
        delectus molestias eaque excepturi saepe? Itaque, labore est hic eaque
        iusto rerum eveniet debitis sed dolorem fuga, magni quam. Et cumque
        provident incidunt? Libero voluptatibus quae quasi. Quam, modi porro.
        Assumenda deleniti sequi dolores fuga a sit accusamus harum quam! Ipsa
        sapiente nihil voluptatum tempora dolorem. Magni eos quod maiores eaque
        ipsam, explicabo quas quis aut laudantium perspiciatis reprehenderit
        tempora, officia temporibus natus eum. Mollitia ad eum totam repellat
        ullam molestias perferendis aliquam quisquam. Ut nesciunt nihil quidem
        dolorum reprehenderit dignissimos quia, accusamus neque voluptatem quis
        tenetur autem beatae saepe hic error maiores aliquam, cupiditate id iste
        adipisci. Temporibus sunt eveniet eos eaque magnam doloribus labore iure
        incidunt qui, praesentium corporis distinctio odio. Quis est non nobis
        fugiat cum soluta, quidem optio praesentium, nulla ullam voluptatem, id
        minima iste. Facere dolorum vero, reprehenderit ut esse mollitia
        cupiditate rem. Qui tempora ipsam, necessitatibus delectus atque
        voluptates non, voluptatibus eius, itaque harum modi. Iste, blanditiis.
        Repellendus, illum! Fugit blanditiis excepturi minima temporibus culpa
        sit possimus aperiam quidem iusto, et quod? Saepe aperiam, dolor libero
        eaque quas ullam natus! Fuga facere asperiores fugit, pariatur rem
        nesciunt temporibus vitae ipsum nisi tenetur, possimus reprehenderit,
        exercitationem nostrum labore. Perferendis quia magni maiores quaerat
        suscipit impedit nisi pariatur est inventore molestias, voluptatum
        debitis quisquam, nulla vel adipisci temporibus? Numquam odit iure quia
        error labore nulla accusamus at rerum, blanditiis accusantium sequi
        explicabo consequatur nisi placeat necessitatibus recusandae
        perspiciatis molestiae eius. Nam aut repellendus est accusamus nihil
        optio atque non dignissimos obcaecati excepturi fuga minima maiores
        reiciendis quod, architecto impedit rem nulla, dolor et autem quam
        magni. Dolorem eum eos harum, quisquam esse fugit non animi at culpa
        saepe vero dignissimos voluptatibus sapiente architecto? Dicta facere
        amet dignissimos quisquam! Reiciendis, doloremque fuga excepturi aliquam
        exercitationem voluptate! Unde cum optio enim impedit aperiam cupiditate
        iure doloribus nobis, eum deserunt qui est ut, ratione, beatae quae ea
        dolorem soluta velit? Harum placeat quibusdam, commodi dicta autem
        repellendus, quam impedit adipisci totam reiciendis repellat? Odit,
        porro qui id neque, quam ea, odio delectus aut dolore eius quasi.
        Pariatur aliquid dolor hic, quae sunt incidunt ut nemo perferendis,
        delectus illum eligendi numquam? Laudantium obcaecati nulla labore
        perferendis, earum aliquam incidunt suscipit voluptatem non, quaerat ad
        vero modi consequuntur dolore ratione corporis amet nisi eveniet
        praesentium accusamus itaque magnam. Praesentium, voluptatem atque
        repellendus repudiandae, dolor tempore quam id velit, minus eaque soluta
        totam perspiciatis dolorum nobis! Animi perspiciatis fugit voluptates
        quaerat magni totam? Voluptate sunt vel pariatur exercitationem maxime,
        eligendi voluptatum. Culpa explicabo nam dolor excepturi cum laborum
        pariatur expedita, debitis id et reprehenderit quam autem voluptates
        delectus incidunt ipsam impedit qui? Earum neque expedita natus pariatur
        illum nemo minima nulla.
      </p>
    </section>
  );
}
