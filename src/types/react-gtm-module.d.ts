declare module "react-gtm-module" {
  interface TagManagerArgs {
    gtmId: string;
    dataLayer?: Record<string, unknown>;
    auth?: string;
    preview?: string;
  }

  class TagManager {
    initialize(args: TagManagerArgs): void;
  }

  export default TagManager;
}
