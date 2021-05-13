--Role użytkowników aplikacji

INSERT INTO roles(id, name) VALUES(1, 'ROLE_ADMIN');
INSERT INTO roles(id, name) VALUES(2, 'ROLE_MODERATOR');
INSERT INTO roles(id, name) VALUES(3, 'ROLE_USER');
INSERT INTO roles(id, name) VALUES(4, 'ROLE_ANDROID_USER');

INSERT INTO users(id, username, name, surname, email, password, phone, draft, enabled, version) VALUES(1, 'admin', 'CPMA', 'Admin', 'duduspatryk1@interia.eu', '$2a$10$fY/xiRfPWzgIadHQsiBkfO6h5Zmux5meLmfP6xzqUut5W43kf9mSC', '604-367-321', false, true, 0);
INSERT INTO user_roles(user_id, role_id) VALUES(0, 1), (0, 3), (0,4);