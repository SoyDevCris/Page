import Socials from "./Socials";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyle="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-white/70 dark:text-primary text text-[20px] hover:text-primary dark:hover:text-white transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; cristian. all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
