/* ============================================================
   Interview questions library — top, category-wise questions
   across the full stack, each with a concise, correct answer.
   Rendered by interview.js.  Each item: { cat, q, a }
   ============================================================ */
window.INTERVIEW = [

  /* ===== JavaScript ===== */
  { cat:"JavaScript", q:"What is the difference between var, let and const?", a:"var is function-scoped and hoisted (initialised as undefined). let and const are block-scoped and live in a 'temporal dead zone' until declared. const cannot be reassigned, though objects it holds can still be mutated." },
  { cat:"JavaScript", q:"What is the difference between == and ===?", a:"== compares values after type coercion (so '5' == 5 is true). === compares both value and type with no coercion (so '5' === 5 is false). Prefer === to avoid surprises." },
  { cat:"JavaScript", q:"What is a closure?", a:"A closure is a function that 'remembers' variables from the scope in which it was created, even after that outer function has returned. It's the basis for data privacy and function factories." },
  { cat:"JavaScript", q:"Explain hoisting.", a:"JavaScript moves declarations to the top of their scope before execution. var is hoisted and initialised as undefined; function declarations are fully hoisted; let/const are hoisted but not initialised (temporal dead zone)." },
  { cat:"JavaScript", q:"What is the event loop?", a:"It's the mechanism that lets single-threaded JS handle async work. It runs the call stack, then drains the microtask queue (promises), then takes one task from the macrotask queue (timers, I/O), and repeats." },
  { cat:"JavaScript", q:"Promises vs async/await?", a:"Both handle asynchronous code. async/await is syntactic sugar over promises that lets you write async logic that reads top-to-bottom, with try/catch for errors instead of .then().catch() chains." },
  { cat:"JavaScript", q:"null vs undefined?", a:"undefined means a variable was declared but never assigned a value. null is an intentional 'empty' value you assign yourself. typeof undefined is 'undefined'; typeof null is 'object' (a historic quirk)." },
  { cat:"JavaScript", q:"How does 'this' work?", a:"'this' refers to the object that invoked the function, decided at call time. In a method it's the object; standalone it's undefined/global; with arrow functions it's inherited from the enclosing scope." },
  { cat:"JavaScript", q:"map() vs forEach()?", a:"map() returns a new array of transformed elements and is chainable. forEach() just runs a function for each element and returns undefined. Use map when you need the result, forEach for side effects." },
  { cat:"JavaScript", q:"What is event bubbling and delegation?", a:"Bubbling is when an event fires on the target then propagates up through its ancestors. Delegation uses this by attaching one listener on a parent to handle events from many children efficiently." },
  { cat:"JavaScript", q:"Debounce vs throttle?", a:"Debounce delays running a function until the user stops triggering it (e.g. search-as-you-type). Throttle runs it at most once per interval (e.g. scroll handlers)." },
  { cat:"JavaScript", q:"Shallow vs deep copy?", a:"A shallow copy (spread, Object.assign) duplicates only the top level — nested objects are shared by reference. A deep copy (structuredClone, or JSON.parse(JSON.stringify())) duplicates every nested level." },
  { cat:"JavaScript", q:"localStorage vs sessionStorage vs cookies?", a:"localStorage persists until cleared; sessionStorage lasts for the tab session; cookies are small, sent with every HTTP request, and can have expiry/security flags. Use storage for client data, cookies for server-read auth." },

  /* ===== React ===== */
  { cat:"React", q:"What is the Virtual DOM?", a:"A lightweight in-memory copy of the real DOM. On state change React builds a new virtual tree, diffs it against the old one (reconciliation), and updates only the real DOM nodes that actually changed." },
  { cat:"React", q:"Props vs state?", a:"Props are read-only inputs passed from a parent component. State is private, mutable data owned and managed inside a component. Changing either triggers a re-render." },
  { cat:"React", q:"What does useEffect do?", a:"It runs side effects (data fetching, subscriptions, DOM work) after render. The dependency array controls when it re-runs; returning a function provides cleanup that runs before the next effect or on unmount." },
  { cat:"React", q:"Why are keys important in lists?", a:"Keys give each list item a stable identity so React can track additions, removals and reorders efficiently during reconciliation. Avoid using the array index as a key when the list can change order." },
  { cat:"React", q:"Controlled vs uncontrolled components?", a:"A controlled input's value is driven by React state (value + onChange). An uncontrolled input keeps its own state in the DOM and is read via a ref. Controlled is preferred for validation and predictability." },
  { cat:"React", q:"useMemo vs useCallback?", a:"useMemo memoises a computed value so it isn't recalculated every render. useCallback memoises a function reference so child components relying on referential equality don't re-render needlessly." },
  { cat:"React", q:"What is the Context API?", a:"A built-in way to share data (theme, auth, language) across the component tree without 'prop drilling'. You create a context, wrap a provider around the tree, and read it with useContext." },
  { cat:"React", q:"What is JSX?", a:"A syntax extension that lets you write HTML-like markup inside JavaScript. It compiles down to React.createElement() calls that produce React elements." },
  { cat:"React", q:"Class vs functional components?", a:"Functional components with hooks are the modern standard — less boilerplate and easier logic reuse. Class components use lifecycle methods and this.state, and are mostly legacy now." },
  { cat:"React", q:"What triggers a re-render?", a:"A component re-renders when its state changes, its props change, its parent re-renders, or a context value it consumes changes. Optimise with memo, useMemo and useCallback when needed." },
  { cat:"React", q:"What is a custom hook?", a:"A reusable function whose name starts with 'use' that encapsulates stateful logic (e.g. useFetch, useToggle). It lets you share behaviour between components without changing their hierarchy." },
  { cat:"React", q:"How do you optimise React performance?", a:"Memoise expensive values/components (React.memo, useMemo, useCallback), use stable keys, lazy-load with React.lazy/Suspense, virtualise long lists, and avoid creating new objects/functions inline where it causes re-renders." },

  /* ===== React Native ===== */
  { cat:"React Native", q:"How does React Native differ from React?", a:"React renders to the browser DOM; React Native renders to real native UI components (View, Text) on iOS/Android via native modules, so you build true mobile apps with one JS codebase." },
  { cat:"React Native", q:"What is the bridge / new architecture?", a:"The bridge is the async layer that passes serialised messages between JS and native code. The new architecture (JSI + Fabric + TurboModules) lets JS call native synchronously, improving performance." },
  { cat:"React Native", q:"FlatList vs ScrollView?", a:"ScrollView renders all children at once — fine for small content. FlatList lazily renders only items near the viewport and recycles them, which is essential for long or infinite lists." },
  { cat:"React Native", q:"How do you persist data locally?", a:"AsyncStorage for simple key-value data, and SQLite, WatermelonDB or Realm/MMKV for larger structured or high-performance storage." },
  { cat:"React Native", q:"How do you handle platform differences?", a:"Use Platform.OS and Platform.select() for small branches, or create platform-specific files like Button.ios.js and Button.android.js that the bundler picks automatically." },
  { cat:"React Native", q:"What is Fast Refresh?", a:"A development feature that instantly reflects code edits in the running app while preserving component state, making the edit-test loop very quick." },
  { cat:"React Native", q:"How do you debug a React Native app?", a:"Use Flipper, React DevTools, the in-app dev menu, console logs, and network inspectors. For performance, profile renders and minimise bridge traffic." },
  { cat:"React Native", q:"How do you optimise RN performance?", a:"Use FlatList for lists, memoise components, avoid inline functions/objects in render, keep images sized correctly, and reduce passes over the bridge by batching native calls." },

  /* ===== Node.js ===== */
  { cat:"Node.js", q:"What is Node.js?", a:"A server-side JavaScript runtime built on Chrome's V8 engine. It's event-driven and non-blocking, making it well-suited to I/O-heavy, real-time applications and APIs." },
  { cat:"Node.js", q:"Is Node.js single-threaded?", a:"The JavaScript event loop runs on a single thread, but Node offloads file/network I/O to libuv's thread pool and the OS, so it handles many concurrent operations without blocking." },
  { cat:"Node.js", q:"What is middleware in Express?", a:"Functions that run during the request-response cycle with access to req, res and next(). They handle cross-cutting concerns like logging, auth, parsing and error handling." },
  { cat:"Node.js", q:"require vs import?", a:"require is CommonJS — synchronous and dynamic. import is ES modules — static, hoisted and supports tree-shaking. Modern Node supports both; ESM is the standard going forward." },
  { cat:"Node.js", q:"How do you handle async errors?", a:"Wrap await calls in try/catch, attach .catch() to promises, use error-first callbacks, and add a centralised Express error-handling middleware. Also handle unhandledRejection at the process level." },
  { cat:"Node.js", q:"process.nextTick vs setImmediate?", a:"process.nextTick callbacks run before the event loop continues (after the current operation). setImmediate runs on the next loop iteration's check phase. nextTick has higher priority." },
  { cat:"Node.js", q:"What is npm and package.json?", a:"npm is Node's package manager. package.json declares your project's metadata, dependencies and scripts; package-lock.json pins exact versions for reproducible installs." },
  { cat:"Node.js", q:"What are streams?", a:"Streams process data in chunks instead of loading it all into memory — readable, writable, duplex and transform. They're ideal for large files, uploads and piping data efficiently." },

  /* ===== PHP ===== */
  { cat:"PHP", q:"include vs require?", a:"Both import another file. require throws a fatal error and stops execution if the file is missing; include only emits a warning and continues. Use require for critical files." },
  { cat:"PHP", q:"== vs === in PHP?", a:"== compares values with type juggling (0 == 'a' was true before PHP 8). === compares value and type strictly. Prefer === for predictable comparisons." },
  { cat:"PHP", q:"What is PDO?", a:"PHP Data Objects — a consistent, database-agnostic API for accessing databases. It supports prepared statements, which prevent SQL injection and improve performance." },
  { cat:"PHP", q:"How do you prevent SQL injection?", a:"Never concatenate user input into queries. Use prepared statements with bound parameters (PDO or MySQLi), and validate/escape input. The database treats parameters as data, not code." },
  { cat:"PHP", q:"What are traits?", a:"Traits let you reuse methods across multiple classes (horizontal code reuse) without inheritance, working around PHP's single-inheritance limitation." },
  { cat:"PHP", q:"Sessions vs cookies?", a:"Cookies store data in the browser and are sent with each request. Sessions store data on the server, referenced by a session ID cookie — better for sensitive data like login state." },
  { cat:"PHP", q:"Abstract class vs interface?", a:"An abstract class can have both implemented and abstract methods and properties, and is extended. An interface only declares method signatures (a contract) and a class can implement many." },
  { cat:"PHP", q:"What is Composer?", a:"PHP's dependency manager. It reads composer.json, installs libraries into vendor/, and provides PSR-4 autoloading so you don't manually require files." },
  { cat:"PHP", q:"GET vs POST?", a:"GET appends data to the URL, is cacheable and meant for retrieval. POST sends data in the request body, isn't cached, and is used for actions that change state or send sensitive data." },
  { cat:"PHP", q:"What is the difference between echo and print?", a:"Both output text. echo can take multiple arguments and returns nothing; print takes one argument and returns 1, so it can be used in expressions. echo is marginally faster." },

  /* ===== Laravel ===== */
  { cat:"Laravel", q:"What is Eloquent?", a:"Laravel's ORM. Each model maps to a database table, letting you query and manipulate rows with expressive methods (User::find(), ->where(), relationships) instead of raw SQL." },
  { cat:"Laravel", q:"What is middleware in Laravel?", a:"A filter layer for HTTP requests — used for authentication, CSRF, CORS, logging, etc. Middleware runs before/after the controller and can short-circuit the request." },
  { cat:"Laravel", q:"What is Artisan?", a:"Laravel's command-line tool. It scaffolds code (make:model, make:controller), runs migrations, clears caches, manages queues and more." },
  { cat:"Laravel", q:"What are migrations?", a:"Version control for your database schema. Migrations define table structure in PHP so the schema can be recreated and shared across environments and teammates." },
  { cat:"Laravel", q:"What is the service container?", a:"Laravel's dependency-injection container that resolves and 'injects' class dependencies automatically. It powers much of the framework's flexibility and testability." },
  { cat:"Laravel", q:"What are facades?", a:"Facades provide a clean static-like syntax (Cache::get()) to access services in the container, while still being backed by resolvable, testable objects." },
  { cat:"Laravel", q:"What is the N+1 problem and eager loading?", a:"N+1 happens when you query a list then run a separate query per item for a relation. Eager loading with ->with('relation') fetches everything in a couple of queries instead." },
  { cat:"Laravel", q:"What are queues?", a:"Queues defer time-consuming tasks (emails, image processing) to background workers so HTTP requests return quickly. Jobs are pushed to a driver like Redis or database." },
  { cat:"Laravel", q:"What is CSRF protection?", a:"Cross-Site Request Forgery protection. Laravel adds a token to forms (@csrf) and verifies it on submission so requests must originate from your own app." },
  { cat:"Laravel", q:"What is route model binding?", a:"Laravel automatically injects a model instance into your route/controller by resolving the URL parameter (e.g. /users/{user} fetches the User), reducing boilerplate lookups." },

  /* ===== CodeIgniter ===== */
  { cat:"CodeIgniter", q:"What is CodeIgniter?", a:"A lightweight, fast PHP MVC framework with minimal configuration and a small footprint. Great for building APIs and apps without heavy overhead." },
  { cat:"CodeIgniter", q:"Explain the MVC pattern.", a:"Model handles data and business rules, View handles presentation, Controller handles input and coordinates the two. It separates concerns for cleaner, maintainable code." },
  { cat:"CodeIgniter", q:"How does routing work in CI4?", a:"Routes are defined in app/Config/Routes.php, mapping HTTP verbs and URL patterns to controller methods, with support for placeholders like (:num) and (:segment)." },
  { cat:"CodeIgniter", q:"What is the Query Builder?", a:"A class that builds SQL queries programmatically with a fluent API. It's database-agnostic and automatically escapes values, reducing injection risk." },
  { cat:"CodeIgniter", q:"What are Filters in CI4?", a:"Filters run logic before or after controllers — used for authentication, CORS, rate limiting, etc. They're registered globally or per-route in Config/Filters.php." },
  { cat:"CodeIgniter", q:"How does CI handle CSRF?", a:"CodeIgniter has built-in CSRF protection configured in Config/Security and Filters. It issues a token that must accompany state-changing requests." },

  /* ===== MySQL ===== */
  { cat:"MySQL", q:"SQL vs NoSQL?", a:"SQL databases are relational with fixed schemas and strong consistency (good for structured, related data). NoSQL stores flexible documents/key-values and scales horizontally (good for unstructured, high-volume data)." },
  { cat:"MySQL", q:"Primary key vs foreign key?", a:"A primary key uniquely identifies each row in a table and can't be null. A foreign key references a primary key in another table, enforcing relationships and referential integrity." },
  { cat:"MySQL", q:"Explain the types of JOINs.", a:"INNER JOIN returns matching rows in both tables. LEFT JOIN returns all left rows plus matches. RIGHT JOIN is the reverse. FULL JOIN returns all rows from both, with NULLs where there's no match." },
  { cat:"MySQL", q:"WHERE vs HAVING?", a:"WHERE filters rows before grouping. HAVING filters groups after GROUP BY (so it can use aggregate functions like COUNT or SUM)." },
  { cat:"MySQL", q:"What is an index?", a:"A data structure that speeds up reads by letting the database find rows without scanning the whole table. The trade-off is slower writes and extra storage." },
  { cat:"MySQL", q:"What is normalization?", a:"Organising tables to reduce redundancy and improve integrity by splitting data into related tables (1NF, 2NF, 3NF). Denormalization sometimes trades that for read speed." },
  { cat:"MySQL", q:"DELETE vs TRUNCATE vs DROP?", a:"DELETE removes selected rows and can be rolled back. TRUNCATE quickly removes all rows and resets auto-increment. DROP removes the entire table structure." },
  { cat:"MySQL", q:"What are ACID transactions?", a:"Atomicity (all-or-nothing), Consistency (valid state), Isolation (concurrent transactions don't interfere), Durability (committed data survives crashes). Wrapped with BEGIN/COMMIT/ROLLBACK." },
  { cat:"MySQL", q:"CHAR vs VARCHAR?", a:"CHAR is fixed-length and padded — fast for consistent sizes. VARCHAR is variable-length and stores only what's needed plus a length byte — better for variable data." },
  { cat:"MySQL", q:"What is a stored procedure?", a:"A precompiled set of SQL statements stored in the database that you can call by name, useful for reusable logic and reducing round-trips." },

  /* ===== MongoDB ===== */
  { cat:"MongoDB", q:"What is MongoDB?", a:"A document-oriented NoSQL database that stores flexible, JSON-like BSON documents in collections, with no fixed schema — well suited to evolving, hierarchical data." },
  { cat:"MongoDB", q:"How do Mongo terms map to SQL?", a:"Database to database, collection to table, document to row, field to column. But documents can nest objects and arrays, unlike flat relational rows." },
  { cat:"MongoDB", q:"Embedding vs referencing?", a:"Embed related data inside a document for data that's read together and bounded in size. Reference (store an id) for large, shared or independently-changing data to avoid duplication." },
  { cat:"MongoDB", q:"What is the aggregation pipeline?", a:"A framework that processes documents through stages ($match, $group, $sort, $lookup) to filter, transform and compute results — Mongo's equivalent of complex SQL queries." },
  { cat:"MongoDB", q:"What is an index in MongoDB?", a:"Like in SQL, it speeds up queries by avoiding full collection scans. Mongo supports single-field, compound, text and geospatial indexes." },
  { cat:"MongoDB", q:"What is sharding?", a:"Horizontal scaling: distributing a collection's data across multiple servers (shards) by a shard key, so the database can handle very large datasets and load." },
  { cat:"MongoDB", q:"What is replication?", a:"A replica set keeps copies of data across multiple nodes. One primary takes writes; secondaries replicate it, providing high availability and automatic failover." },
  { cat:"MongoDB", q:"When would you choose MongoDB over MySQL?", a:"When data is unstructured or rapidly evolving, you need horizontal scale, or documents map naturally to your objects. Choose SQL for strong relations and multi-row transactional integrity." },

  /* ===== REST API & JWT ===== */
  { cat:"REST & JWT", q:"What is a REST API?", a:"An architectural style where resources are exposed via URLs and manipulated with stateless HTTP methods. Each request carries all the info needed; the server stores no client session." },
  { cat:"REST & JWT", q:"What do the main HTTP methods do?", a:"GET reads, POST creates, PUT replaces, PATCH partially updates, DELETE removes. GET and PUT/DELETE are idempotent; POST generally isn't." },
  { cat:"REST & JWT", q:"What is a JWT?", a:"A JSON Web Token — a signed, self-contained token with three parts: header.payload.signature. The server verifies the signature instead of looking up a session, enabling stateless auth." },
  { cat:"REST & JWT", q:"JWT vs session authentication?", a:"Sessions store state on the server and send a session-id cookie. JWTs are stateless — the token itself carries the claims — which scales well but makes revocation harder." },
  { cat:"REST & JWT", q:"What is CORS?", a:"Cross-Origin Resource Sharing — a browser security feature that blocks requests to a different origin unless the server sends Access-Control-Allow-* headers permitting it." },
  { cat:"REST & JWT", q:"What does idempotent mean?", a:"An operation that produces the same result no matter how many times it's repeated. GET, PUT and DELETE are idempotent; POST usually creates a new resource each time." },
  { cat:"REST & JWT", q:"What are common status codes?", a:"200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Validation error, 500 Server error." },
  { cat:"REST & JWT", q:"How do you secure a REST API?", a:"Use HTTPS, authenticate with tokens/OAuth, validate and sanitise input, apply rate limiting, scope permissions (RBAC), and never trust client data. Keep secrets out of code." },

  /* ===== HTML & CSS ===== */
  { cat:"HTML & CSS", q:"What is semantic HTML?", a:"Using tags that describe their meaning (header, nav, main, article, footer) rather than generic divs. It improves accessibility, SEO and code readability." },
  { cat:"HTML & CSS", q:"Block vs inline elements?", a:"Block elements (div, p, h1) start on a new line and take full width. Inline elements (span, a, strong) flow within a line and only take the space they need." },
  { cat:"HTML & CSS", q:"Explain the CSS box model.", a:"Every element is a box made of content, padding, border and margin. box-sizing: border-box makes width include padding and border, which is easier to reason about." },
  { cat:"HTML & CSS", q:"Flexbox vs Grid?", a:"Flexbox is one-dimensional (a row or a column) — great for components and alignment. Grid is two-dimensional (rows and columns together) — great for page layouts." },
  { cat:"HTML & CSS", q:"What do the CSS position values do?", a:"static (default), relative (offset from itself), absolute (positioned to nearest positioned ancestor), fixed (to the viewport), sticky (relative until it hits a scroll threshold)." },
  { cat:"HTML & CSS", q:"How does CSS specificity work?", a:"Specificity decides which rule wins: inline styles > IDs > classes/attributes/pseudo-classes > elements. !important overrides all (use sparingly). Ties go to the last rule." },
  { cat:"HTML & CSS", q:"px vs em vs rem?", a:"px is a fixed pixel. em is relative to the parent's font size. rem is relative to the root font size — rem is preferred for consistent, scalable, accessible sizing." },
  { cat:"HTML & CSS", q:"How do you make a site responsive?", a:"Use fluid layouts (%, flex, grid), relative units, flexible images, and media queries to adapt styles at breakpoints. Design mobile-first and test across sizes." },
  { cat:"HTML & CSS", q:"Pseudo-class vs pseudo-element?", a:"A pseudo-class targets a state (:hover, :focus, :nth-child). A pseudo-element styles a part of an element (::before, ::after, ::first-line)." },
  { cat:"HTML & CSS", q:"id vs class?", a:"An id is unique per page and has higher specificity; a class can be reused on many elements. Prefer classes for styling and ids for unique hooks/anchors." },

  /* ===== Git ===== */
  { cat:"Git", q:"git merge vs rebase?", a:"merge combines branches and creates a merge commit, preserving history as it happened. rebase replays your commits on top of another branch for a clean, linear history. Don't rebase shared/public branches." },
  { cat:"Git", q:"git fetch vs git pull?", a:"fetch downloads remote changes but doesn't touch your working branch. pull is fetch + merge (or rebase) — it downloads and integrates in one step." },
  { cat:"Git", q:"git reset vs git revert?", a:"reset moves the branch pointer (can rewrite history and discard commits) — good locally. revert creates a new commit that undoes a previous one — safe for shared branches." },
  { cat:"Git", q:"What is a merge conflict and how do you resolve it?", a:"It occurs when two branches change the same lines. Git marks the conflict; you edit the file to keep the correct version, remove the markers, then git add and commit/continue." },
  { cat:"Git", q:"What is the staging area?", a:"An intermediate area where you assemble exactly what goes into the next commit. git add moves changes into it; git commit records what's staged." },
  { cat:"Git", q:"What is HEAD?", a:"A pointer to the current commit/branch you have checked out. Moving HEAD (checkout/switch) changes which snapshot your working directory reflects." },
  { cat:"Git", q:"What does git stash do?", a:"It shelves your uncommitted changes and gives you a clean working directory, so you can switch context. git stash pop reapplies them later." },
  { cat:"Git", q:"Fork vs clone?", a:"A clone is a local copy of a repo you can push to (if you have access). A fork is your own server-side copy of someone else's repo, typically used to contribute via pull requests." },

  /* ===== HR / Behavioural ===== */
  { cat:"HR / Behavioural", q:"Tell me about yourself.", a:"Structure it: a one-line summary of your role and experience, two or three highlights/skills relevant to the job, and why you're excited about this position. Keep it under ~90 seconds and tailored to the role." },
  { cat:"HR / Behavioural", q:"Why should we hire you?", a:"Connect your strengths directly to their needs: name the specific skills (e.g. full-stack delivery, API design) and a concrete result you've achieved, then show enthusiasm for their product/team." },
  { cat:"HR / Behavioural", q:"What is your greatest strength and weakness?", a:"For strength, pick one relevant to the role and back it with an example. For weakness, give a real but non-critical one and, importantly, the steps you're taking to improve it." },
  { cat:"HR / Behavioural", q:"Why do you want to work here?", a:"Show you've researched them: mention their product, tech stack, mission or culture, and link it to your goals. Avoid generic answers — be specific about what attracts you." },
  { cat:"HR / Behavioural", q:"Where do you see yourself in 5 years?", a:"Show ambition and commitment: growing your technical depth, taking on more ownership/leadership, and contributing more value — framed as growing with the company, not leaving it." },
  { cat:"HR / Behavioural", q:"Describe a challenging project you worked on.", a:"Use the STAR method: Situation, Task, Action, Result. Explain the problem, what you specifically did, the technical decisions, and the measurable outcome." },
  { cat:"HR / Behavioural", q:"How do you handle tight deadlines and pressure?", a:"Describe your process: prioritise ruthlessly, break work into milestones, communicate early about risks, and stay calm. Give a short example where you delivered under pressure." },
  { cat:"HR / Behavioural", q:"Do you have any questions for us?", a:"Always say yes. Ask about the team structure, tech stack and challenges, what success looks like in the role, and growth opportunities. It signals genuine interest." },
];
