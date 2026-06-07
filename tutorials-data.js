/* ============================================================
   Tutorials library — 200 hands-on guides across the stack.
   Each item: { cat, lang, title, desc, code }
   Rendered dynamically by tutorials.js (code shown via textContent,
   so no HTML escaping needed here).
   ============================================================ */
window.TUTORIALS = [

  /* ============== PHP (core) ============== */
  { cat:"PHP", lang:"php", title:"Transform arrays with map & filter", desc:"Filter then transform a list in two clean steps.",
    code:`$nums   = [1, 2, 3, 4, 5, 6];
$evens  = array_filter($nums, fn($n) => $n % 2 === 0);
$double = array_map(fn($n) => $n * 2, $evens);
print_r(array_values($double)); // [4, 8, 12]` },
  { cat:"PHP", lang:"php", title:"Read & decode a JSON file", desc:"Load JSON from disk into a PHP array.",
    code:`$json = file_get_contents('data.json');
$data = json_decode($json, true);

foreach ($data as $row) {
    echo $row['name'] . PHP_EOL;
}` },
  { cat:"PHP", lang:"php", title:"Write data to a file", desc:"Save text or JSON to disk safely.",
    code:`$payload = json_encode(['status' => 'ok'], JSON_PRETTY_PRINT);
file_put_contents('output.json', $payload, LOCK_EX);` },
  { cat:"PHP", lang:"php", title:"Make a GET request with cURL", desc:"Call an external API and read the response.",
    code:`$ch = curl_init('https://api.example.com/users');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$users = json_decode($response, true);` },
  { cat:"PHP", lang:"php", title:"POST JSON with cURL", desc:"Send a JSON body to an API endpoint.",
    code:`$ch = curl_init('https://api.example.com/login');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode(['email' => 'a@b.com']),
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
]);
$res = curl_exec($ch);
curl_close($ch);` },
  { cat:"PHP", lang:"php", title:"Hash & verify passwords", desc:"Never store plain passwords — hash them.",
    code:`$hash = password_hash($plain, PASSWORD_DEFAULT);

if (password_verify($plain, $hash)) {
    echo 'Login OK';
}` },
  { cat:"PHP", lang:"php", title:"Handle a file upload", desc:"Move an uploaded file to a safe folder.",
    code:`if ($_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
    $name = bin2hex(random_bytes(8)) . '_' . basename($_FILES['avatar']['name']);
    move_uploaded_file($_FILES['avatar']['tmp_name'], "uploads/$name");
}` },
  { cat:"PHP", lang:"php", title:"Work with sessions", desc:"Store and read per-user session data.",
    code:`session_start();
$_SESSION['user_id'] = 42;

if (isset($_SESSION['user_id'])) {
    echo 'Logged in as ' . $_SESSION['user_id'];
}
// session_destroy(); // to log out` },
  { cat:"PHP", lang:"php", title:"Connect to MySQL with PDO", desc:"A reusable, exception-safe DB connection.",
    code:`$pdo = new PDO('mysql:host=localhost;dbname=app', 'root', '', [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
]);` },
  { cat:"PHP", lang:"php", title:"Format and compare dates", desc:"Use DateTime for reliable date math.",
    code:`$start = new DateTime('2026-01-01');
$now   = new DateTime();
$days  = $start->diff($now)->days;

echo $now->format('d M Y') . " ($days days)";` },
  { cat:"PHP", lang:"php", title:"Group an array by a key", desc:"Bucket rows by a shared field.",
    code:`$grouped = [];
foreach ($tasks as $task) {
    $grouped[$task['status']][] = $task;
}
// $grouped['open'], $grouped['done'] ...` },
  { cat:"PHP", lang:"php", title:"Generate a secure random token", desc:"For API keys, reset links, etc.",
    code:`$token = bin2hex(random_bytes(32)); // 64-char hex string` },
  { cat:"PHP", lang:"php", title:"Validate & sanitize input", desc:"Filter user input before using it.",
    code:`$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$age   = filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT);

if (!$email) {
    exit('Invalid email');
}` },
  { cat:"PHP", lang:"php", title:"Send an email with mail()", desc:"Quick plain-text email from PHP.",
    code:`$to      = 'user@example.com';
$subject = 'Welcome!';
$body    = 'Thanks for signing up.';
$headers = 'From: noreply@myapp.com';

mail($to, $subject, $body, $headers);` },

  /* ============== Laravel ============== */
  { cat:"Laravel", lang:"bash", title:"Create a new Laravel project", desc:"Scaffold a fresh app with Composer.",
    code:`composer create-project laravel/laravel myapp
cd myapp
php artisan serve   // http://127.0.0.1:8000` },
  { cat:"Laravel", lang:"bash", title:"Generate a model + migration", desc:"One command for model, migration & controller.",
    code:`php artisan make:model Task -mc
// -m migration, -c controller
php artisan migrate` },
  { cat:"Laravel", lang:"php", title:"Define routes to a controller", desc:"Map URLs to controller methods.",
    code:`use App\\Http\\Controllers\\TaskController;

Route::get('/tasks', [TaskController::class, 'index']);
Route::post('/tasks', [TaskController::class, 'store']);
Route::resource('projects', ProjectController::class);` },
  { cat:"Laravel", lang:"php", title:"Eloquent CRUD operations", desc:"Create, read, update & delete records.",
    code:`$task = Task::create(['title' => 'Design UI']);   // create
$all  = Task::all();                                // read
$task->update(['status' => 'done']);                // update
$task->delete();                                    // delete` },
  { cat:"Laravel", lang:"php", title:"Validate a form request", desc:"Reject bad input with clear rules.",
    code:`$data = $request->validate([
    'title' => 'required|string|max:255',
    'email' => 'required|email|unique:users',
    'age'   => 'nullable|integer|min:18',
]);` },
  { cat:"Laravel", lang:"php", title:"Blade layout with sections", desc:"Reusable master layout via @yield.",
    code:`{{-- layouts/app.blade.php --}}
<html><body>@yield('content')</body></html>

{{-- page.blade.php --}}
@extends('layouts.app')
@section('content')
  <h1>Hello {{ $name }}</h1>
@endsection` },
  { cat:"Laravel", lang:"php", title:"Create middleware", desc:"Run logic before a request hits the controller.",
    code:`// php artisan make:middleware EnsureAdmin
public function handle($request, Closure $next)
{
    if (! $request->user()?->is_admin) {
        abort(403);
    }
    return $next($request);
}` },
  { cat:"Laravel", lang:"php", title:"Store an uploaded file", desc:"Save to storage and get a public path.",
    code:`$path = $request->file('photo')->store('avatars', 'public');
// returns: avatars/abc123.jpg
$url = Storage::url($path);` },
  { cat:"Laravel", lang:"php", title:"Eager-load relationships", desc:"Avoid N+1 queries with with().",
    code:`$posts = Post::with('author', 'comments')->latest()->get();

foreach ($posts as $post) {
    echo $post->author->name;
}` },
  { cat:"Laravel", lang:"php", title:"Build an API resource", desc:"Shape JSON output cleanly.",
    code:`// php artisan make:resource TaskResource
public function toArray($request)
{
    return [
        'id'    => $this->id,
        'title' => $this->title,
        'done'  => (bool) $this->is_done,
    ];
}` },
  { cat:"Laravel", lang:"php", title:"Paginate results", desc:"Built-in pagination with links.",
    code:`$tasks = Task::paginate(15);

return view('tasks.index', compact('tasks'));
// In Blade: {{ $tasks->links() }}` },
  { cat:"Laravel", lang:"bash", title:"Add login with Breeze", desc:"Full auth scaffolding in minutes.",
    code:`composer require laravel/breeze --dev
php artisan breeze:install
npm install && npm run dev
php artisan migrate` },
  { cat:"Laravel", lang:"php", title:"Dispatch a queued job", desc:"Offload slow work to the background.",
    code:`// php artisan make:job SendInvoice
SendInvoice::dispatch($order)->onQueue('emails');

// Run the worker:
// php artisan queue:work` },
  { cat:"Laravel", lang:"php", title:"Send a Mailable email", desc:"Class-based emails with Blade views.",
    code:`use Illuminate\\Support\\Facades\\Mail;

Mail::to($user->email)->send(new WelcomeMail($user));` },
  { cat:"Laravel", lang:"php", title:"Read config & env values", desc:"Access .env safely via config().",
    code:`// .env  ->  APP_NAME=TaskOps
$name = config('app.name');
$key  = env('RAZORPAY_KEY'); // only in config files` },
  { cat:"Laravel", lang:"php", title:"Razorpay payment gateway", desc:"Create an order & verify the signature.",
    code:`use Razorpay\\Api\\Api;

$api   = new Api(env('RAZORPAY_KEY'), env('RAZORPAY_SECRET'));
$order = $api->order->create([
    'amount'   => 500 * 100,   // paise
    'currency' => 'INR',
    'receipt'  => 'rcpt_1',
]);
return view('checkout', ['orderId' => $order['id']]);` },
  { cat:"Laravel", lang:"php", title:"Database seeding & factories", desc:"Generate fake data for testing.",
    code:`// database/seeders/DatabaseSeeder.php
User::factory(10)->create();

// run: php artisan db:seed` },

  /* ============== CodeIgniter 4 ============== */
  { cat:"CodeIgniter", lang:"bash", title:"Install CodeIgniter 4", desc:"Start a new CI4 app with Composer.",
    code:`composer create-project codeigniter4/appstarter myapp
cd myapp
php spark serve   // http://localhost:8080` },
  { cat:"CodeIgniter", lang:"php", title:"Create a model", desc:"Map a table with built-in CRUD helpers.",
    code:`<?php namespace App\\Models;
use CodeIgniter\\Model;

class TaskModel extends Model
{
    protected $table         = 'tasks';
    protected $primaryKey    = 'id';
    protected $allowedFields = ['title', 'status'];
}` },
  { cat:"CodeIgniter", lang:"php", title:"Route to a controller", desc:"Define clean routes in Config/Routes.php.",
    code:`$routes->get('tasks', 'Tasks::index');
$routes->post('tasks', 'Tasks::create');
$routes->put('tasks/(:num)', 'Tasks::update/$1');` },
  { cat:"CodeIgniter", lang:"php", title:"Query Builder CRUD", desc:"Fluent, safe database queries.",
    code:`$db = \\Config\\Database::connect();
$db->table('tasks')->insert(['title' => 'New']);
$rows = $db->table('tasks')->where('status', 'open')->get()->getResultArray();
$db->table('tasks')->where('id', 1)->update(['status' => 'done']);
$db->table('tasks')->delete(['id' => 1]);` },
  { cat:"CodeIgniter", lang:"php", title:"Validate form input", desc:"Server-side validation rules.",
    code:`if (! $this->validate([
    'email' => 'required|valid_email',
    'title' => 'required|min_length[3]',
])) {
    return redirect()->back()->with('errors', $this->validator->getErrors());
}` },
  { cat:"CodeIgniter", lang:"php", title:"Use sessions", desc:"Store flash & persistent session data.",
    code:`$session = session();
$session->set('user_id', 42);
$session->setFlashdata('msg', 'Saved!');

$id = $session->get('user_id');` },
  { cat:"CodeIgniter", lang:"php", title:"Handle a file upload", desc:"Validate and move uploaded files.",
    code:`$file = $this->request->getFile('photo');
if ($file->isValid() && ! $file->hasMoved()) {
    $name = $file->getRandomName();
    $file->move(WRITEPATH . 'uploads', $name);
}` },
  { cat:"CodeIgniter", lang:"bash", title:"Create & run a migration", desc:"Version-control your schema.",
    code:`php spark make:migration create_tasks
// edit the file, then:
php spark migrate` },
  { cat:"CodeIgniter", lang:"php", title:"Protect routes with a filter", desc:"Run auth checks before controllers.",
    code:`// app/Filters/AuthFilter.php -> before()
if (! session()->get('user_id')) {
    return redirect()->to('/login');
}
// Register in Config/Filters.php and apply to routes` },
  { cat:"CodeIgniter", lang:"php", title:"JWT auth on login", desc:"Issue a signed token with firebase/php-jwt.",
    code:`use Firebase\\JWT\\JWT;

$token = JWT::encode(
    ['sub' => $user['id'], 'exp' => time() + 3600],
    getenv('JWT_SECRET'),
    'HS256'
);
return $this->respond(['token' => $token]);` },
  { cat:"CodeIgniter", lang:"php", title:"Paginate query results", desc:"Built-in pager with the model.",
    code:`$model = new TaskModel();
$data  = [
    'tasks' => $model->paginate(10),
    'pager' => $model->pager,
];
return view('tasks', $data);` },
  { cat:"CodeIgniter", lang:"php", title:"Send email", desc:"Use the built-in Email service.",
    code:`$email = \\Config\\Services::email();
$email->setTo('user@example.com');
$email->setSubject('Hello');
$email->setMessage('Welcome aboard!');
$email->send();` },
  { cat:"CodeIgniter", lang:"php", title:"Enable CORS for an API", desc:"Allow cross-origin requests.",
    code:`// In a before-filter or controller:
$response->setHeader('Access-Control-Allow-Origin', '*');
$response->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
$response->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');` },
  { cat:"CodeIgniter", lang:"php", title:"Read .env configuration", desc:"Environment-based settings.",
    code:`// .env  ->  app.baseURL = 'http://localhost:8080'
$baseUrl = getenv('app.baseURL');
$jwt     = getenv('JWT_SECRET');` },

  /* ============== REST API & JWT ============== */
  { cat:"REST API", lang:"php", title:"Return a clean JSON response", desc:"Set the right header and status code.",
    code:`header('Content-Type: application/json');
http_response_code(200);
echo json_encode(['data' => $tasks, 'success' => true]);` },
  { cat:"REST API", lang:"text", title:"Common HTTP status codes", desc:"Pick the right code for each outcome.",
    code:`200 OK            - request succeeded
201 Created       - resource created
204 No Content    - success, nothing to return
400 Bad Request   - invalid input
401 Unauthorized  - missing/invalid token
403 Forbidden     - no permission
404 Not Found     - resource missing
422 Unprocessable - validation failed
500 Server Error  - something broke` },
  { cat:"REST API", lang:"php", title:"Encode a JWT", desc:"Create a signed token for a user.",
    code:`use Firebase\\JWT\\JWT;

$payload = ['sub' => $userId, 'iat' => time(), 'exp' => time() + 3600];
$token   = JWT::encode($payload, $secret, 'HS256');` },
  { cat:"REST API", lang:"php", title:"Decode & verify a JWT", desc:"Validate the token on protected routes.",
    code:`use Firebase\\JWT\\JWT;
use Firebase\\JWT\\Key;

try {
    $decoded = JWT::decode($token, new Key($secret, 'HS256'));
    $userId  = $decoded->sub;
} catch (\\Exception $e) {
    http_response_code(401);
    exit('Invalid token');
}` },
  { cat:"REST API", lang:"php", title:"Read a Bearer token from headers", desc:"Extract the token from Authorization.",
    code:`$auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
if (preg_match('/Bearer\\s(\\S+)/', $auth, $m)) {
    $token = $m[1];
}` },
  { cat:"REST API", lang:"php", title:"Version your API", desc:"Group routes under /v1 for stability.",
    code:`$routes->group('api/v1', static function ($routes) {
    $routes->resource('tasks');
});
// later add api/v2 without breaking clients` },
  { cat:"REST API", lang:"json", title:"Standard error response shape", desc:"Consistent errors are easy to consume.",
    code:`{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The email field is required.",
    "fields": { "email": "required" }
  }
}` },
  { cat:"REST API", lang:"json", title:"Pagination metadata", desc:"Tell clients how to page through data.",
    code:`{
  "data": [],
  "meta": { "page": 1, "per_page": 15, "total": 142, "last_page": 10 }
}` },
  { cat:"REST API", lang:"js", title:"Call an API with Axios", desc:"GET and POST with a bearer token.",
    code:`import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.example.com' });
api.defaults.headers.common.Authorization = 'Bearer ' + token;

const { data } = await api.get('/tasks');
await api.post('/tasks', { title: 'New task' });` },
  { cat:"REST API", lang:"js", title:"Handle API errors gracefully", desc:"Catch and surface failures to the user.",
    code:`try {
  const res = await fetch('/api/tasks');
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
} catch (err) {
  console.error('Request failed:', err.message);
}` },
  { cat:"REST API", lang:"php", title:"Throttle requests (rate limit)", desc:"Basic per-IP limiting with cache.",
    code:`$key   = 'rl_' . $_SERVER['REMOTE_ADDR'];
$hits  = (int) cache($key);
if ($hits >= 60) {
    http_response_code(429);
    exit('Too many requests');
}
cache()->save($key, $hits + 1, 60);` },
  { cat:"REST API", lang:"bash", title:"Test an endpoint with curl", desc:"Quickly hit your API from the terminal.",
    code:`curl -X POST https://api.example.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"a@b.com","password":"secret"}'` },

  /* ============== JavaScript ============== */
  { cat:"JavaScript", lang:"js", title:"Arrow functions", desc:"Concise function syntax with lexical this.",
    code:`const add  = (a, b) => a + b;
const sqr  = n => n * n;
const log  = () => console.log('hi');` },
  { cat:"JavaScript", lang:"js", title:"Destructuring", desc:"Pull values out of objects and arrays.",
    code:`const user = { name: 'Dipak', role: 'Dev' };
const { name, role } = user;

const [first, second] = [10, 20];` },
  { cat:"JavaScript", lang:"js", title:"Spread & rest operators", desc:"Copy, merge, and collect values.",
    code:`const merged = { ...defaults, ...overrides };
const clone  = [...items];

const sum = (...nums) => nums.reduce((a, b) => a + b, 0);` },
  { cat:"JavaScript", lang:"js", title:"Promises", desc:"Handle async results with then/catch.",
    code:`fetch('/api/user')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));` },
  { cat:"JavaScript", lang:"js", title:"async / await", desc:"Write async code that reads top-to-bottom.",
    code:`async function loadUser() {
  try {
    const res  = await fetch('/api/user');
    const user = await res.json();
    return user;
  } catch (e) {
    console.error(e);
  }
}` },
  { cat:"JavaScript", lang:"js", title:"map, filter, reduce", desc:"The three array methods you use daily.",
    code:`const nums  = [1, 2, 3, 4];
const dbl   = nums.map(n => n * 2);          // [2,4,6,8]
const even  = nums.filter(n => n % 2 === 0); // [2,4]
const total = nums.reduce((a, b) => a + b);  // 10` },
  { cat:"JavaScript", lang:"js", title:"Template literals", desc:"String interpolation and multi-line strings.",
    code:`const name = 'Dipak';
const msg  = \`Hello \${name}, welcome!\`;
const html = \`<li>\${name}</li>\`;` },
  { cat:"JavaScript", lang:"js", title:"localStorage", desc:"Persist small data in the browser.",
    code:`localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
localStorage.removeItem('theme');

// store objects:
localStorage.setItem('user', JSON.stringify(user));` },
  { cat:"JavaScript", lang:"js", title:"Debounce a function", desc:"Limit how often a handler runs (e.g. search).",
    code:`function debounce(fn, delay = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}
input.addEventListener('input', debounce(search, 400));` },
  { cat:"JavaScript", lang:"js", title:"Event delegation", desc:"Handle many child clicks with one listener.",
    code:`list.addEventListener('click', (e) => {
  const item = e.target.closest('li');
  if (item) console.log('Clicked', item.dataset.id);
});` },
  { cat:"JavaScript", lang:"js", title:"Optional chaining & nullish", desc:"Safely read nested values.",
    code:`const city = user?.address?.city ?? 'Unknown';
const fn   = obj.method?.();` },
  { cat:"JavaScript", lang:"js", title:"ES modules import / export", desc:"Split code across files.",
    code:`// math.js
export const add = (a, b) => a + b;
export default function mul(a, b) { return a * b; }

// app.js
import mul, { add } from './math.js';` },
  { cat:"JavaScript", lang:"js", title:"setTimeout & setInterval", desc:"Run code later or repeatedly.",
    code:`setTimeout(() => console.log('after 2s'), 2000);

const id = setInterval(() => tick(), 1000);
clearInterval(id); // stop it` },
  { cat:"JavaScript", lang:"js", title:"JSON parse & stringify", desc:"Convert between objects and JSON text.",
    code:`const obj  = JSON.parse('{"a":1}');
const text = JSON.stringify(obj, null, 2);` },
  { cat:"JavaScript", lang:"js", title:"Fetch with POST", desc:"Send JSON to a server with fetch.",
    code:`await fetch('/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'New task' }),
});` },
  { cat:"JavaScript", lang:"js", title:"Format dates", desc:"Readable dates with Intl.",
    code:`const d = new Date();
const out = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'medium', timeStyle: 'short',
}).format(d);` },

  /* ============== React ============== */
  { cat:"React", lang:"jsx", title:"useState hook", desc:"Add local state to a component.",
    code:`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}` },
  { cat:"React", lang:"jsx", title:"useEffect hook", desc:"Run side effects after render.",
    code:`import { useEffect } from 'react';

useEffect(() => {
  document.title = 'Tasks (' + count + ')';
}, [count]); // re-runs when count changes` },
  { cat:"React", lang:"jsx", title:"Pass & use props", desc:"Send data from parent to child.",
    code:`function Greeting({ name, role }) {
  return <h2>{name} — {role}</h2>;
}

<Greeting name="Dipak" role="Developer" />` },
  { cat:"React", lang:"jsx", title:"Conditional rendering", desc:"Show UI based on state.",
    code:`{loading
  ? <Spinner />
  : <TaskList tasks={tasks} />}

{error && <p className="error">{error}</p>}` },
  { cat:"React", lang:"jsx", title:"Render lists with keys", desc:"Map data to elements correctly.",
    code:`<ul>
  {tasks.map(task => (
    <li key={task.id}>{task.title}</li>
  ))}
</ul>` },
  { cat:"React", lang:"jsx", title:"Controlled form input", desc:"Bind inputs to state.",
    code:`const [email, setEmail] = useState('');

<input
  value={email}
  onChange={e => setEmail(e.target.value)}
/>` },
  { cat:"React", lang:"jsx", title:"Fetch data on mount", desc:"Load API data with useEffect.",
    code:`useEffect(() => {
  fetch('/api/tasks')
    .then(r => r.json())
    .then(setTasks);
}, []);` },
  { cat:"React", lang:"jsx", title:"useContext for global state", desc:"Share data without prop drilling.",
    code:`const ThemeContext = createContext('light');

function Page() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>...</div>;
}` },
  { cat:"React", lang:"jsx", title:"useRef for DOM access", desc:"Reference an element directly.",
    code:`const inputRef = useRef(null);

useEffect(() => inputRef.current.focus(), []);

<input ref={inputRef} />` },
  { cat:"React", lang:"jsx", title:"Build a custom hook", desc:"Reuse stateful logic across components.",
    code:`function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = () => setOn(o => !o);
  return [on, toggle];
}

const [open, toggleOpen] = useToggle();` },
  { cat:"React", lang:"jsx", title:"useReducer for complex state", desc:"Manage state transitions predictably.",
    code:`function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    default:    return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });` },
  { cat:"React", lang:"jsx", title:"Routing with React Router", desc:"Client-side navigation between pages.",
    code:`import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tasks/:id" element={<Task />} />
  </Routes>
</BrowserRouter>` },
  { cat:"React", lang:"jsx", title:"Lift state up", desc:"Share state between sibling components.",
    code:`function Parent() {
  const [query, setQuery] = useState('');
  return (
    <>
      <Search value={query} onChange={setQuery} />
      <Results query={query} />
    </>
  );
}` },
  { cat:"React", lang:"jsx", title:"Memoize with React.memo", desc:"Skip re-renders when props are equal.",
    code:`const Row = React.memo(function Row({ task }) {
  return <li>{task.title}</li>;
});` },
  { cat:"React", lang:"jsx", title:"Lazy-load components", desc:"Split bundles and load on demand.",
    code:`const Dashboard = React.lazy(() => import('./Dashboard'));

<Suspense fallback={<Spinner />}>
  <Dashboard />
</Suspense>` },
  { cat:"React", lang:"jsx", title:"Read environment variables", desc:"Use build-time config (Vite/CRA).",
    code:`// .env  ->  VITE_API_URL=https://api.example.com
const url = import.meta.env.VITE_API_URL;
// CRA: process.env.REACT_APP_API_URL` },

  /* ============== React Native ============== */
  { cat:"React Native", lang:"jsx", title:"Basic View, Text & styles", desc:"The building blocks of every screen.",
    code:`import { View, Text, StyleSheet } from 'react-native';

export default () => (
  <View style={s.box}><Text style={s.title}>Hello</Text></View>
);
const s = StyleSheet.create({
  box:   { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
});` },
  { cat:"React Native", lang:"jsx", title:"FlatList from an API", desc:"Efficiently render long lists.",
    code:`<FlatList
  data={tasks}
  keyExtractor={(i) => i.id.toString()}
  renderItem={({ item }) => <Text>{item.title}</Text>}
/>` },
  { cat:"React Native", lang:"jsx", title:"TextInput with state", desc:"Capture user text input.",
    code:`const [text, setText] = useState('');

<TextInput
  value={text}
  onChangeText={setText}
  placeholder="Type here"
/>` },
  { cat:"React Native", lang:"jsx", title:"Buttons & touch handling", desc:"Respond to taps.",
    code:`import { TouchableOpacity, Text } from 'react-native';

<TouchableOpacity onPress={save} style={s.btn}>
  <Text style={s.btnText}>Save</Text>
</TouchableOpacity>` },
  { cat:"React Native", lang:"bash", title:"Stack navigation setup", desc:"Move between screens.",
    code:`npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context` },
  { cat:"React Native", lang:"jsx", title:"Navigate between screens", desc:"Use the navigation prop.",
    code:`<Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Details" component={Details} />
</Stack.Navigator>

// inside Home:
navigation.navigate('Details', { id: 7 });` },
  { cat:"React Native", lang:"jsx", title:"Persist data with AsyncStorage", desc:"Store key-value data on device.",
    code:`import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('token', jwt);
const token = await AsyncStorage.getItem('token');` },
  { cat:"React Native", lang:"jsx", title:"Fetch data from an API", desc:"Load remote data with state.",
    code:`useEffect(() => {
  fetch('https://api.example.com/tasks')
    .then(r => r.json())
    .then(setTasks);
}, []);` },
  { cat:"React Native", lang:"jsx", title:"Display images", desc:"Local and remote images.",
    code:`<Image
  source={{ uri: 'https://picsum.photos/200' }}
  style={{ width: 200, height: 200, borderRadius: 12 }}
/>` },
  { cat:"React Native", lang:"jsx", title:"Scrollable content", desc:"Wrap content in a ScrollView.",
    code:`<ScrollView contentContainerStyle={{ padding: 16 }}>
  {sections.map(s => <Card key={s.id} {...s} />)}
</ScrollView>` },
  { cat:"React Native", lang:"jsx", title:"Show a Modal", desc:"Overlay content above the screen.",
    code:`<Modal visible={open} animationType="slide" transparent>
  <View style={s.backdrop}>
    <View style={s.sheet}><Text>Hello</Text></View>
  </View>
</Modal>` },
  { cat:"React Native", lang:"jsx", title:"Platform-specific code", desc:"Branch behaviour per OS.",
    code:`import { Platform } from 'react-native';

const pad = Platform.OS === 'ios' ? 44 : 24;
const font = Platform.select({ ios: 'Helvetica', android: 'Roboto' });` },
  { cat:"React Native", lang:"jsx", title:"SafeAreaView for notches", desc:"Keep content out of system areas.",
    code:`import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={{ flex: 1 }}>
  <YourScreen />
</SafeAreaView>` },
  { cat:"React Native", lang:"jsx", title:"Activity indicator (loader)", desc:"Show a spinner while loading.",
    code:`{loading
  ? <ActivityIndicator size="large" color="#7c5cff" />
  : <Content />}` },

  /* ============== Node.js ============== */
  { cat:"Node.js", lang:"js", title:"Minimal HTTP server", desc:"A server with no dependencies.",
    code:`const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node');
}).listen(3000);` },
  { cat:"Node.js", lang:"bash", title:"Set up Express", desc:"Install and bootstrap a server.",
    code:`npm init -y
npm install express
node index.js` },
  { cat:"Node.js", lang:"js", title:"Express routes", desc:"Define GET and POST endpoints.",
    code:`const express = require('express');
const app = express();
app.use(express.json());

app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => res.status(201).json(req.body));

app.listen(3000);` },
  { cat:"Node.js", lang:"js", title:"Read files with fs", desc:"Async file reading.",
    code:`const fs = require('fs/promises');

const data = await fs.readFile('data.json', 'utf8');
const json = JSON.parse(data);` },
  { cat:"Node.js", lang:"js", title:"Load env with dotenv", desc:"Keep secrets out of code.",
    code:`require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;` },
  { cat:"Node.js", lang:"js", title:"Express middleware", desc:"Run logic on every request.",
    code:`app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});` },
  { cat:"Node.js", lang:"js", title:"Connect to MySQL", desc:"Query a database with mysql2.",
    code:`const mysql = require('mysql2/promise');
const db = await mysql.createConnection({ host:'localhost', user:'root', database:'app' });

const [rows] = await db.query('SELECT * FROM tasks');` },
  { cat:"Node.js", lang:"js", title:"Sign a JWT", desc:"Issue tokens with jsonwebtoken.",
    code:`const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
  expiresIn: '1h',
});` },
  { cat:"Node.js", lang:"js", title:"Hash passwords with bcrypt", desc:"Securely store credentials.",
    code:`const bcrypt = require('bcrypt');

const hash = await bcrypt.hash(password, 10);
const ok   = await bcrypt.compare(password, hash);` },
  { cat:"Node.js", lang:"js", title:"Enable CORS in Express", desc:"Allow browser clients to call your API.",
    code:`const cors = require('cors');
app.use(cors({ origin: 'https://myapp.com' }));` },
  { cat:"Node.js", lang:"js", title:"File uploads with Multer", desc:"Handle multipart form data.",
    code:`const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ path: req.file.path });
});` },
  { cat:"Node.js", lang:"js", title:"Send email with Nodemailer", desc:"Send mail through SMTP.",
    code:`const nodemailer = require('nodemailer');
const t = nodemailer.createTransport({ host:'smtp.example.com', port:587, auth:{ user, pass } });

await t.sendMail({ to:'a@b.com', subject:'Hi', text:'Hello!' });` },

  /* ============== MySQL ============== */
  { cat:"MySQL", lang:"sql", title:"Create a table", desc:"Define columns, types and a primary key.",
    code:`CREATE TABLE tasks (
  id     INT AUTO_INCREMENT PRIMARY KEY,
  title  VARCHAR(255) NOT NULL,
  status VARCHAR(20) DEFAULT 'open',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);` },
  { cat:"MySQL", lang:"sql", title:"Insert rows", desc:"Add single or multiple records.",
    code:`INSERT INTO tasks (title, status)
VALUES ('Design UI', 'open'),
       ('Write API', 'done');` },
  { cat:"MySQL", lang:"sql", title:"Select with WHERE", desc:"Filter rows by condition.",
    code:`SELECT id, title FROM tasks
WHERE status = 'open' AND created_at > '2026-01-01';` },
  { cat:"MySQL", lang:"sql", title:"Update rows", desc:"Modify existing records.",
    code:`UPDATE tasks SET status = 'done'
WHERE id = 5;` },
  { cat:"MySQL", lang:"sql", title:"Delete rows", desc:"Remove records by condition.",
    code:`DELETE FROM tasks WHERE status = 'archived';` },
  { cat:"MySQL", lang:"sql", title:"Join two tables", desc:"Combine related data.",
    code:`SELECT t.title, u.name AS assignee
FROM tasks t
JOIN users u ON u.id = t.user_id;` },
  { cat:"MySQL", lang:"sql", title:"Group & aggregate", desc:"Count rows per group.",
    code:`SELECT status, COUNT(*) AS total
FROM tasks
GROUP BY status;` },
  { cat:"MySQL", lang:"sql", title:"Order & limit", desc:"Sort and page results.",
    code:`SELECT * FROM tasks
ORDER BY created_at DESC
LIMIT 10 OFFSET 20;` },
  { cat:"MySQL", lang:"sql", title:"Add an index", desc:"Speed up lookups on a column.",
    code:`CREATE INDEX idx_status ON tasks (status);` },
  { cat:"MySQL", lang:"sql", title:"Foreign key constraint", desc:"Enforce relationships between tables.",
    code:`ALTER TABLE tasks
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE;` },
  { cat:"MySQL", lang:"sql", title:"Search with LIKE", desc:"Partial text matching.",
    code:`SELECT * FROM tasks
WHERE title LIKE '%design%';` },
  { cat:"MySQL", lang:"sql", title:"Alter a table", desc:"Add or change columns.",
    code:`ALTER TABLE tasks ADD COLUMN priority INT DEFAULT 0;
ALTER TABLE tasks MODIFY title VARCHAR(300);` },
  { cat:"MySQL", lang:"sql", title:"Transactions", desc:"All-or-nothing multi-step writes.",
    code:`START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- or ROLLBACK;` },
  { cat:"MySQL", lang:"sql", title:"Count & DISTINCT", desc:"Count unique values.",
    code:`SELECT COUNT(DISTINCT user_id) AS active_users
FROM tasks;` },

  /* ============== MongoDB ============== */
  { cat:"MongoDB", lang:"js", title:"Connect with Mongoose", desc:"Open a connection to MongoDB.",
    code:`const mongoose = require('mongoose');
await mongoose.connect('mongodb://127.0.0.1:27017/app');` },
  { cat:"MongoDB", lang:"js", title:"Define a schema & model", desc:"Shape your documents.",
    code:`const taskSchema = new mongoose.Schema({
  title:  { type: String, required: true },
  status: { type: String, default: 'open' },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);` },
  { cat:"MongoDB", lang:"js", title:"Insert a document", desc:"Create a new record.",
    code:`const task = await Task.create({ title: 'Write docs' });` },
  { cat:"MongoDB", lang:"js", title:"Find documents", desc:"Query with filters.",
    code:`const open = await Task.find({ status: 'open' });
const one  = await Task.findById(id);` },
  { cat:"MongoDB", lang:"js", title:"Update a document", desc:"Modify and return the new version.",
    code:`await Task.findByIdAndUpdate(id, { status: 'done' }, { new: true });` },
  { cat:"MongoDB", lang:"js", title:"Delete a document", desc:"Remove by id.",
    code:`await Task.findByIdAndDelete(id);` },
  { cat:"MongoDB", lang:"js", title:"Query operators", desc:"Greater-than, in, and more.",
    code:`await Task.find({
  priority: { $gte: 3 },
  status:   { $in: ['open', 'review'] },
});` },
  { cat:"MongoDB", lang:"js", title:"Sort, limit & skip", desc:"Page and order results.",
    code:`await Task.find()
  .sort({ createdAt: -1 })
  .skip(20)
  .limit(10);` },
  { cat:"MongoDB", lang:"js", title:"Populate references", desc:"Join related documents.",
    code:`const tasks = await Task.find().populate('assignee', 'name email');` },
  { cat:"MongoDB", lang:"js", title:"Aggregation pipeline", desc:"Group and compute totals.",
    code:`await Task.aggregate([
  { $group: { _id: '$status', total: { $sum: 1 } } },
  { $sort: { total: -1 } },
]);` },
  { cat:"MongoDB", lang:"js", title:"Create an index", desc:"Speed up queries on a field.",
    code:`taskSchema.index({ status: 1, createdAt: -1 });` },
  { cat:"MongoDB", lang:"js", title:"Native driver insert", desc:"Use the official driver without Mongoose.",
    code:`const { MongoClient } = require('mongodb');
const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
await client.db('app').collection('tasks').insertOne({ title: 'Hi' });` },

  /* ============== HTML ============== */
  { cat:"HTML", lang:"html", title:"HTML5 boilerplate", desc:"A correct starting document.",
    code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
<body></body>
</html>` },
  { cat:"HTML", lang:"html", title:"Build a form", desc:"Labels, inputs and a submit button.",
    code:`<form action="/submit" method="POST">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Send</button>
</form>` },
  { cat:"HTML", lang:"html", title:"Create a table", desc:"Header row and data rows.",
    code:`<table>
  <thead><tr><th>Name</th><th>Role</th></tr></thead>
  <tbody>
    <tr><td>Dipak</td><td>Developer</td></tr>
  </tbody>
</table>` },
  { cat:"HTML", lang:"html", title:"Semantic layout tags", desc:"Use meaningful structure for SEO/a11y.",
    code:`<header>...</header>
<nav>...</nav>
<main>
  <article>...</article>
  <aside>...</aside>
</main>
<footer>...</footer>` },
  { cat:"HTML", lang:"html", title:"Responsive image", desc:"Alt text and intrinsic sizing.",
    code:`<img src="photo.jpg" alt="Team photo" width="600" loading="lazy">` },
  { cat:"HTML", lang:"html", title:"Links & anchors", desc:"External, internal and section links.",
    code:`<a href="https://example.com" target="_blank" rel="noopener">Visit</a>
<a href="#contact">Jump to contact</a>` },
  { cat:"HTML", lang:"html", title:"SEO & social meta tags", desc:"Help search and link previews.",
    code:`<meta name="description" content="Portfolio of Dipak Barman">
<meta property="og:title" content="Dipak Barman">
<meta property="og:image" content="preview.jpg">` },
  { cat:"HTML", lang:"html", title:"Embed audio & video", desc:"Native media players.",
    code:`<video src="demo.mp4" controls width="480"></video>
<audio src="track.mp3" controls></audio>` },
  { cat:"HTML", lang:"html", title:"Useful input types", desc:"Get better mobile keyboards & validation.",
    code:`<input type="email">
<input type="number" min="0" max="100">
<input type="date">
<input type="tel">
<input type="password">` },
  { cat:"HTML", lang:"html", title:"Embed an iframe", desc:"Embed maps, videos or other pages.",
    code:`<iframe src="https://maps.google.com/..." width="100%" height="300"
        loading="lazy"></iframe>` },
  { cat:"HTML", lang:"html", title:"Ordered & unordered lists", desc:"Structure grouped content.",
    code:`<ul><li>Item A</li><li>Item B</li></ul>
<ol><li>Step 1</li><li>Step 2</li></ol>` },
  { cat:"HTML", lang:"html", title:"Buttons & data attributes", desc:"Attach custom data to elements.",
    code:`<button data-id="42" class="delete">Delete</button>
<!-- read in JS: el.dataset.id -->` },

  /* ============== CSS ============== */
  { cat:"CSS", lang:"css", title:"Center with Flexbox", desc:"Perfect horizontal + vertical centering.",
    code:`.center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}` },
  { cat:"CSS", lang:"css", title:"CSS Grid layout", desc:"Responsive auto-fitting columns.",
    code:`.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}` },
  { cat:"CSS", lang:"css", title:"Media queries", desc:"Adapt styles to screen size.",
    code:`@media (max-width: 768px) {
  .sidebar { display: none; }
  .content { width: 100%; }
}` },
  { cat:"CSS", lang:"css", title:"Custom properties (variables)", desc:"Theme your site from one place.",
    code:`:root {
  --primary: #7c5cff;
  --radius: 12px;
}
.btn { background: var(--primary); border-radius: var(--radius); }` },
  { cat:"CSS", lang:"css", title:"Smooth transitions", desc:"Animate property changes on hover.",
    code:`.btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover { transform: translateY(-3px); }` },
  { cat:"CSS", lang:"css", title:"Keyframe animation", desc:"Define multi-step animations.",
    code:`@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}
.icon { animation: float 3s ease-in-out infinite; }` },
  { cat:"CSS", lang:"css", title:"Box shadows", desc:"Add depth with layered shadows.",
    code:`.card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}` },
  { cat:"CSS", lang:"css", title:"Gradient backgrounds", desc:"Linear and radial gradients.",
    code:`.hero {
  background: linear-gradient(135deg, #7c5cff, #00d4ff);
}` },
  { cat:"CSS", lang:"css", title:"Positioning", desc:"Absolute inside relative parent.",
    code:`.parent { position: relative; }
.badge {
  position: absolute;
  top: 8px; right: 8px;
}` },
  { cat:"CSS", lang:"css", title:"Gradient text", desc:"Clip a gradient to text.",
    code:`.gradient-text {
  background: linear-gradient(90deg, #7c5cff, #00d4ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}` },
  { cat:"CSS", lang:"css", title:"Pseudo-elements", desc:"Add decorative content with ::before.",
    code:`.link::after {
  content: '';
  display: block;
  height: 2px;
  background: #7c5cff;
  width: 0;
  transition: width 0.25s;
}
.link:hover::after { width: 100%; }` },
  { cat:"CSS", lang:"css", title:"Sticky header", desc:"Pin an element while scrolling.",
    code:`.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
}` },
  { cat:"CSS", lang:"css", title:"Truncate text with ellipsis", desc:"Cut off overflowing single-line text.",
    code:`.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}` },
  { cat:"CSS", lang:"css", title:"Respect dark mode", desc:"Adapt to the user's OS theme.",
    code:`@media (prefers-color-scheme: dark) {
  body { background: #0a0a12; color: #fff; }
}` },

  /* ============== Tailwind ============== */
  { cat:"Tailwind", lang:"html", title:"Add Tailwind via CDN", desc:"Fastest way to try Tailwind.",
    code:`<script src="https://cdn.tailwindcss.com"></script>
<div class="p-6 text-indigo-600 font-bold">Hello Tailwind</div>` },
  { cat:"Tailwind", lang:"html", title:"Center content", desc:"Flex utilities for centering.",
    code:`<div class="flex items-center justify-center min-h-screen">
  <h1 class="text-3xl font-bold">Centered</h1>
</div>` },
  { cat:"Tailwind", lang:"html", title:"Responsive grid", desc:"Columns that adapt to screen size.",
    code:`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded-xl shadow">Card</div>
</div>` },
  { cat:"Tailwind", lang:"html", title:"Responsive prefixes", desc:"Apply styles at breakpoints.",
    code:`<p class="text-sm md:text-base lg:text-lg">Scales with screen</p>` },
  { cat:"Tailwind", lang:"html", title:"Build a card", desc:"A clean elevated card component.",
    code:`<div class="max-w-sm bg-white rounded-2xl shadow-lg p-6">
  <h3 class="text-xl font-bold">Title</h3>
  <p class="text-gray-500 mt-2">Description text.</p>
</div>` },
  { cat:"Tailwind", lang:"html", title:"Styled button", desc:"Hover, focus and transition.",
    code:`<button class="bg-indigo-600 hover:bg-indigo-700 text-white
               font-semibold px-5 py-2.5 rounded-xl transition">
  Click me
</button>` },
  { cat:"Tailwind", lang:"html", title:"Form input", desc:"Accessible, focus-ring input.",
    code:`<input class="w-full border border-gray-300 rounded-lg px-3 py-2
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
       placeholder="Email">` },
  { cat:"Tailwind", lang:"html", title:"Hover & focus states", desc:"State variants in class names.",
    code:`<a class="text-gray-600 hover:text-indigo-600 focus:underline">Link</a>` },
  { cat:"Tailwind", lang:"html", title:"Dark mode classes", desc:"Per-element dark styling.",
    code:`<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white p-6">
  Adapts to dark mode
</div>` },
  { cat:"Tailwind", lang:"html", title:"Spacing & flex gap", desc:"Margins, padding and gaps.",
    code:`<div class="flex gap-4 p-6 space-y-0">
  <span class="px-3 py-1">A</span>
  <span class="px-3 py-1">B</span>
</div>` },
  { cat:"Tailwind", lang:"html", title:"Typography utilities", desc:"Size, weight, tracking, leading.",
    code:`<h1 class="text-4xl font-extrabold tracking-tight leading-tight">
  Big heading
</h1>` },
  { cat:"Tailwind", lang:"js", title:"Custom theme colors", desc:"Extend the palette in config.",
    code:`// tailwind.config.js
module.exports = {
  theme: { extend: { colors: { brand: '#7c5cff' } } },
};
// use: class="bg-brand text-brand"` },

  /* ============== Bootstrap ============== */
  { cat:"Bootstrap", lang:"html", title:"Add Bootstrap 5 via CDN", desc:"CSS and JS bundle links.",
    code:`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>` },
  { cat:"Bootstrap", lang:"html", title:"Responsive grid", desc:"12-column layout with breakpoints.",
    code:`<div class="container">
  <div class="row">
    <div class="col-md-6">Left</div>
    <div class="col-md-6">Right</div>
  </div>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Navbar", desc:"Collapsible responsive navigation.",
    code:`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">App</a>
  </div>
</nav>` },
  { cat:"Bootstrap", lang:"html", title:"Card component", desc:"Image, body and button.",
    code:`<div class="card" style="width:18rem;">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <a href="#" class="btn btn-primary">Go</a>
  </div>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Buttons & variants", desc:"Contextual button colors.",
    code:`<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-danger btn-sm">Delete</button>` },
  { cat:"Bootstrap", lang:"html", title:"Form with validation styles", desc:"Labels, controls and help text.",
    code:`<div class="mb-3">
  <label class="form-label">Email</label>
  <input type="email" class="form-control" required>
</div>
<button class="btn btn-primary">Submit</button>` },
  { cat:"Bootstrap", lang:"html", title:"Modal dialog", desc:"Trigger and modal markup.",
    code:`<button data-bs-toggle="modal" data-bs-target="#m" class="btn btn-primary">Open</button>

<div class="modal fade" id="m" tabindex="-1">
  <div class="modal-dialog"><div class="modal-content p-3">Hello</div></div>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Alerts", desc:"Dismissible contextual messages.",
    code:`<div class="alert alert-success alert-dismissible">
  Saved successfully!
  <button class="btn-close" data-bs-dismiss="alert"></button>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Styled table", desc:"Striped, hoverable rows.",
    code:`<table class="table table-striped table-hover">
  <thead><tr><th>#</th><th>Name</th></tr></thead>
  <tbody><tr><td>1</td><td>Dipak</td></tr></tbody>
</table>` },
  { cat:"Bootstrap", lang:"html", title:"Badges", desc:"Small status labels.",
    code:`<span class="badge bg-primary">New</span>
<span class="badge bg-success">Done</span>
<span class="badge rounded-pill bg-danger">3</span>` },
  { cat:"Bootstrap", lang:"html", title:"Loading spinner", desc:"Indicate background work.",
    code:`<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Carousel slider", desc:"Auto-sliding image carousel.",
    code:`<div id="c" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active"><img src="1.jpg" class="d-block w-100"></div>
    <div class="carousel-item"><img src="2.jpg" class="d-block w-100"></div>
  </div>
</div>` },

  /* ============== Git ============== */
  { cat:"Git", lang:"bash", title:"Initialize a repo & first commit", desc:"Start tracking a project.",
    code:`git init
git add .
git commit -m "Initial commit"` },
  { cat:"Git", lang:"bash", title:"Create & switch branches", desc:"Work on features in isolation.",
    code:`git branch feature-login
git checkout feature-login
# or in one step:
git checkout -b feature-login` },
  { cat:"Git", lang:"bash", title:"Merge a branch", desc:"Bring changes back into main.",
    code:`git checkout main
git merge feature-login` },
  { cat:"Git", lang:"bash", title:"Add a remote & push", desc:"Send commits to GitHub.",
    code:`git remote add origin https://github.com/you/repo.git
git push -u origin main` },
  { cat:"Git", lang:"bash", title:"Clone a repository", desc:"Copy a remote repo locally.",
    code:`git clone https://github.com/you/repo.git
cd repo` },
  { cat:"Git", lang:"bash", title:"Check status & history", desc:"See changes and past commits.",
    code:`git status
git log --oneline --graph --all` },
  { cat:"Git", lang:"bash", title:"Stash work in progress", desc:"Shelve changes temporarily.",
    code:`git stash
# do something else, then:
git stash pop` },
  { cat:"Git", lang:"bash", title:"Undo changes", desc:"Discard or unstage edits.",
    code:`git restore file.txt        # discard working changes
git restore --staged file.txt  # unstage
git reset --soft HEAD~1     # undo last commit, keep changes` },
  { cat:"Git", lang:"bash", title:"Create a .gitignore", desc:"Keep junk out of version control.",
    code:`# .gitignore
/node_modules
/vendor
.env
*.log` },
  { cat:"Git", lang:"bash", title:"Pull & rebase", desc:"Update your branch cleanly.",
    code:`git pull --rebase origin main` },
];
