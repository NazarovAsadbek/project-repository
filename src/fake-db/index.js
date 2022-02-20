import mock from "./mock";

import "./data/note";
import "./data/todo";
import "./data/chat";
import "./data/ecommerce";

mock.onAny().passThrough();
