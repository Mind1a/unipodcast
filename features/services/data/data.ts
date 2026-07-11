import { Service } from "../types/types";

/**
 * NOTE: the body copy below is a placeholder — the source screenshot's
 * paragraph text was too low-resolution to transcribe reliably.
 * Swap `description` (and double check `title`) with your real copy.
 */
export const services: Service[] = [
  {
    id: "rubrics",
    tag: "რუბრიკები",
    tagPosition: "left",
    title: "უნიპოდკასტის რუბრიკები",
    description:
      "რუბრიკების მხარდაჭერის შემთხვევაში ბარტერის სანაცვლოდ გთავაზობთ თქვენი ბრენდის / კომპანიის ხსენებას როგორც ვერბალურად რუბრიკებში ასევე ტექსტურად აღწერაში",
    descriptionSecond:
      "ყოველი რუბრიკა გამორჩეულია აქტუალობით. მორგებულია სტუდენტების საჭიროებებსა და ინტერესებს. ",
    image: "/assets/images/serviceImages/png/rubrics.png",
    imageAlt: "რუბრიკები",
    buttonText: "ვრცლად",
    buttonHref: "/services/rubrics",
  },
  {
    id: "episodes",
    tag: "ეპიზოდები",
    tagPosition: "center",
    title: "ეპიზოდების მხარდაჭერა",
    description:
      "ეპიზოდების მხარდაჭერის შემთხვევაში ბარტერის სანაცვლოდ გთავაზობთ თქვენი ბრენდის / კომპანიის ხსენებას როგორც ვერბალურად ეპიზოდში ასევე ტექსტურად იუთუბის აღწერაში",
    descriptionSecond:
      "ეპიზოდები ყოველ ორ კვირაში ერთხელ მზადდება და იტვირთება “უნი პოდკასტის” Youtube არხზე.. ",
    image: "/assets/images/serviceImages/png/episode.png",
    imageAlt: "ეპიზოდები",
    buttonText: "ვრცლად",
    buttonHref: "/services/episodes",
  },
  {
    id: "campaigns",
    tag: "კამპანიები",
    tagPosition: "right",
    title: "უნიპოდკასტის კამპანიები",
    description:
      "ამპანიების მხარდაჭერის შემთხვევაში ბარტერის სანაცვლოდ გთავაზობთ თქვენი ბრენდის / კომპანიის ხსენებას როგორც ვერბალურად კამპანიებში, ასევე ტექსტურად კამპანიის აღწერაში.",
    descriptionSecond:
      "კამპანიებს აქვს სისტემური ხასიათი და პერიოდულად ეპიზოდის / პოსტის / მოკლე ვიდეოს სახით მზადდება.. ",
    image: "/assets/images/serviceImages/png/campaign.png",
    imageAlt: "კამპანიები",
    buttonText: "ვრცლად",
    buttonHref: "/services/campaigns",
  },
];
