import Page from "@/components/Page";
import Post from "@/components/Post";
import Project from "@/components/Project";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cover from "@/components/Cover";
import Columns from "@/components/Columns";
import Steps from "@/components/Steps";
import Carousel from "@/components/Carousel";
import Grid from "@/components/Grid";
import Form from "@/components/Form";
import Alias from "@/components/Alias";
import Text from "@/components/Text";
import Image from "@/components/Image";
import Link from "@/components/Link";
import Wrapper from "@/components/Wrapper";
import Group from "@/components/Group";
import Field from "@/components/Field";

export const components = {
  page: Page,
  post: Post,
  project: Project,
  header: Header,
  footer: Footer,
  cover: Cover,
  columns: Columns,
  steps: Steps,
  carousel: Carousel,
  grid: Grid,
  form: Form,
  alias: Alias,
  text: Text,
  image: Image,
  link: Link,
  wrapper: Wrapper,
  group: Group,
  field: Field,
};

export const relations = [
  "page.header",
  "page.footer",
  "project.header",
  "project.footer",
  "post.header",
  "post.footer",
  "alias.story",
];
